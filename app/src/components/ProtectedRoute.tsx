import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { UserRole } from '../types';

export function ProtectedRoute({ role, children }: { role: UserRole; children: ReactNode }) {
  const { firebaseUser, profile, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
        جارِ التحميل…
      </div>
    );
  }

  if (!firebaseUser || !profile) return <Navigate to="/login" replace />;
  if (profile.role !== role) return <Navigate to="/login" replace />;
  if (profile.role === 'lawyer' && profile.status !== 'active') return <Navigate to="/pending" replace />;

  return <>{children}</>;
}
