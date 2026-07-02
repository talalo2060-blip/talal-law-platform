import { Clock, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import talalMark from '../assets/talal-mark.svg';
import { Button } from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

export function PendingApprovalPage() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const rejected = profile?.status === 'rejected';

  async function handleSignOut() {
    await signOut();
    navigate('/login');
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, padding: 24, textAlign: 'center' }}>
      <img src={talalMark} alt="مكتب طلال" style={{ width: 56, height: 56 }} />
      {rejected ? <XCircle size={40} strokeWidth={1.6} style={{ color: 'var(--danger-600)' }} /> : <Clock size={40} strokeWidth={1.6} style={{ color: 'var(--gold-600)' }} />}
      <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-strong)', maxWidth: 420 }}>
        {rejected ? 'لم تتم الموافقة على طلب انضمامك' : 'طلب انضمامك قيد المراجعة'}
      </h1>
      <p style={{ fontSize: 14.5, color: 'var(--text-muted)', maxWidth: 420, lineHeight: 1.8 }}>
        {rejected
          ? 'راجع إدارة المكتب لمزيد من التفاصيل حول قرار طلبك.'
          : 'ستتمكن من الدخول إلى لوحة الإدارة فور موافقة إدارة المكتب على طلب انضمامك كمحامٍ.'}
      </p>
      <Button variant="outline" onClick={handleSignOut}>
        تسجيل الخروج
      </Button>
    </div>
  );
}
