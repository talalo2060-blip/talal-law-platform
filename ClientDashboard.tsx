import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  type User,
} from 'firebase/auth';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import type { CaseCategory, UserProfile, UserRole } from '../types';

interface SignUpClientInput {
  name: string;
  email: string;
  password: string;
  clientType: 'فرد' | 'منشأة';
}

interface SignUpLawyerInput {
  name: string;
  email: string;
  password: string;
  specialty: CaseCategory;
  licenseNumber: string;
}

interface AuthContextValue {
  firebaseUser: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUpClient: (input: SignUpClientInput) => Promise<void>;
  signUpLawyer: (input: SignUpLawyerInput) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      setAuthLoading(false);
      if (!user) {
        setProfile(null);
        setProfileLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!firebaseUser) return;
    setProfileLoading(true);
    return onSnapshot(doc(db, 'users', firebaseUser.uid), (snap) => {
      setProfile(snap.exists() ? (snap.data() as UserProfile) : null);
      setProfileLoading(false);
    });
  }, [firebaseUser]);

  async function createProfile(uid: string, base: Omit<UserProfile, 'uid' | 'createdAt'>) {
    await setDoc(doc(db, 'users', uid), {
      ...base,
      uid,
      createdAt: Date.now(),
    });
  }

  async function signIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function signUpClient({ name, email, password, clientType }: SignUpClientInput) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    await createProfile(cred.user.uid, {
      email,
      name,
      role: 'client' as UserRole,
      status: 'active',
      clientType,
    });
  }

  async function signUpLawyer({ name, email, password, specialty, licenseNumber }: SignUpLawyerInput) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    await createProfile(cred.user.uid, {
      email,
      name,
      role: 'lawyer' as UserRole,
      status: 'pending',
      specialty,
      licenseNumber,
      rating: 5,
      casesCount: 0,
    });
  }

  async function signOut() {
    await firebaseSignOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        profile,
        loading: authLoading || (!!firebaseUser && profileLoading),
        signIn,
        signUpClient,
        signUpLawyer,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
