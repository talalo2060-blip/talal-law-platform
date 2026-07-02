import { useEffect, useMemo, useState } from 'react';
import { collection, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Bell,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  Scale,
  Search,
  Users,
  type LucideIcon,
} from 'lucide-react';
import talalMark from '../assets/talal-mark.svg';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { initials } from '../lib/format';
import type { CaseRecord, ConsultationRecord, UserProfile } from '../types';
import { OverviewSection } from './admin/OverviewSection';
import { LawyersSection } from './admin/LawyersSection';
import { ClientsSection } from './admin/ClientsSection';
import { CasesSection } from './admin/CasesSection';
import { ReportsSection } from './admin/ReportsSection';

type NavKey = 'overview' | 'lawyers' | 'clients' | 'cases' | 'reports';

const NAV_DEFS: { key: NavKey; label: string; icon: LucideIcon; title: string; sub: string }[] = [
  { key: 'overview', label: 'نظرة عامة', icon: LayoutDashboard, title: 'نظرة عامة', sub: 'ملخص أداء المنصة اليوم' },
  { key: 'lawyers', label: 'المحامون والأعضاء', icon: Scale, title: 'المحامون والأعضاء', sub: 'إدارة الفريق والموافقة على الطلبات' },
  { key: 'clients', label: 'العملاء', icon: Users, title: 'العملاء', sub: 'إدارة حسابات العملاء' },
  { key: 'cases', label: 'القضايا والاستشارات', icon: FolderOpen, title: 'القضايا والاستشارات', sub: 'متابعة القضايا والرد على الاستشارات' },
  { key: 'reports', label: 'التقارير', icon: BarChart3, title: 'التقارير والإحصاءات', sub: 'مؤشرات الأداء والإيرادات' },
];

function navItemStyle(active: boolean) {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '11px 14px',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontSize: 14.5,
    fontWeight: active ? 600 : 500,
    background: active ? 'rgba(184,146,76,0.16)' : 'transparent',
    color: active ? 'var(--ivory)' : 'var(--navy-200)',
    borderInlineEnd: active ? '2.5px solid var(--gold-500)' : '2.5px solid transparent',
    transition: 'var(--transition-base)',
  } as const;
}

export function AdminDashboard() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [nav, setNav] = useState<NavKey>('overview');
  const [lawyers, setLawyers] = useState<UserProfile[]>([]);
  const [clients, setClients] = useState<UserProfile[]>([]);
  const [cases, setCases] = useState<CaseRecord[]>([]);
  const [consultations, setConsultations] = useState<ConsultationRecord[]>([]);

  useEffect(() => {
    const unsubLawyers = onSnapshot(query(collection(db, 'users'), where('role', '==', 'lawyer')), (snap) =>
      setLawyers(snap.docs.map((d) => d.data() as UserProfile)),
    );
    const unsubClients = onSnapshot(query(collection(db, 'users'), where('role', '==', 'client')), (snap) =>
      setClients(snap.docs.map((d) => d.data() as UserProfile)),
    );
    const unsubCases = onSnapshot(collection(db, 'cases'), (snap) =>
      setCases(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as CaseRecord)),
    );
    const unsubConsults = onSnapshot(collection(db, 'consultations'), (snap) =>
      setConsultations(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as ConsultationRecord)),
    );
    return () => {
      unsubLawyers();
      unsubClients();
      unsubCases();
      unsubConsults();
    };
  }, []);

  const pendingCount = useMemo(() => lawyers.filter((l) => l.status === 'pending').length, [lawyers]);
  const pendingConsults = useMemo(() => consultations.filter((c) => c.needsReply), [consultations]);
  const cur = NAV_DEFS.find((n) => n.key === nav) ?? NAV_DEFS[0];

  async function approve(uid: string) {
    await updateDoc(doc(db, 'users', uid), { status: 'active' });
  }
  async function reject(uid: string) {
    await updateDoc(doc(db, 'users', uid), { status: 'rejected' });
  }
  async function reply(id: string, text: string) {
    await updateDoc(doc(db, 'consultations', id), {
      staffReply: text,
      needsReply: false,
      status: 'مكتملة',
      respondedAt: Date.now(),
    });
  }
  async function handleSignOut() {
    await signOut();
    navigate('/login');
  }

  if (!profile) return null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ flex: '0 0 264px', background: 'linear-gradient(180deg,var(--navy-800),var(--navy-900))', color: 'var(--ivory)', display: 'flex', flexDirection: 'column', padding: '22px 16px', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '6px 8px 20px' }}>
          <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <img src={talalMark} style={{ width: 28, height: 28 }} alt="" />
          </span>
          <div>
            <b style={{ display: 'block', fontSize: 14, color: 'var(--ivory)' }}>مكتب طلال</b>
            <span style={{ fontSize: 11, color: 'var(--gold-500)' }}>لوحة الإدارة</span>
          </div>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {NAV_DEFS.map((n) => (
            <button key={n.key} onClick={() => setNav(n.key)} style={navItemStyle(nav === n.key)}>
              <n.icon size={19} strokeWidth={1.8} style={{ flex: 'none' }} />
              <span style={{ flex: 1, textAlign: 'start' }}>{n.label}</span>
              {n.key === 'lawyers' && pendingCount > 0 && (
                <span style={{ minWidth: 20, height: 20, padding: '0 6px', borderRadius: 'var(--radius-pill)', background: 'var(--gold-600)', color: 'var(--navy-900)', fontSize: 11.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  {pendingCount}
                </span>
              )}
            </button>
          ))}
        </nav>
        <button onClick={handleSignOut} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', borderRadius: 'var(--radius-md)', border: 'none', background: 'rgba(255,255,255,.06)', color: 'var(--navy-200)', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
          <LogOut size={18} strokeWidth={1.8} /> تسجيل الخروج
        </button>
      </aside>

      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '16px 32px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 10 }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-strong)', margin: 0 }}>{cur.title}</h1>
            <p style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '2px 0 0' }}>{cur.sub}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 40, padding: '0 14px', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-pill)', width: 240, color: 'var(--text-muted)' }}>
              <Search size={17} strokeWidth={1.8} />
              <span style={{ fontSize: 13.5 }}>بحث…</span>
            </div>
            <button style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border-subtle)', background: 'var(--white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--navy-700)', position: 'relative' }}>
              <Bell size={18} strokeWidth={1.8} />
              <span style={{ position: 'absolute', top: 8, left: 8, width: 7, height: 7, borderRadius: '50%', background: 'var(--gold-600)' }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingInlineStart: 6, borderInlineStart: '1px solid var(--border-subtle)' }}>
              <div style={{ textAlign: 'left' }}>
                <b style={{ display: 'block', fontSize: 13.5, color: 'var(--text-strong)' }}>{profile.name}</b>
                <span style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>عضو الفريق</span>
              </div>
              <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--navy-800)', color: 'var(--ivory)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                {initials(profile.name)}
              </span>
            </div>
          </div>
        </header>

        <div style={{ flex: 1, padding: '28px 32px 48px' }}>
          {nav === 'overview' && (
            <OverviewSection
              lawyers={lawyers}
              clients={clients}
              cases={cases}
              consultations={consultations}
              onApprove={approve}
              onReject={reject}
              onGoLawyers={() => setNav('lawyers')}
            />
          )}
          {nav === 'lawyers' && <LawyersSection lawyers={lawyers} cases={cases} onApprove={approve} onReject={reject} />}
          {nav === 'clients' && <ClientsSection clients={clients} cases={cases} />}
          {nav === 'cases' && <CasesSection cases={cases} pendingConsults={pendingConsults} onReply={reply} />}
          {nav === 'reports' && <ReportsSection cases={cases} consultations={consultations} lawyers={lawyers} />}
        </div>
      </main>
    </div>
  );
}
