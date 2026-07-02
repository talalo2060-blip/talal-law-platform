import { useState, type CSSProperties } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, Scale, Sparkles, User } from 'lucide-react';
import { AuthShell } from '../components/AuthShell';
import { TextField } from '../components/TextField';
import { useAuth } from '../contexts/AuthContext';
import type { UserRole } from '../types';

function segStyle(active: boolean): CSSProperties {
  return {
    flex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 44,
    border: 'none',
    cursor: 'pointer',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    fontWeight: 600,
    background: active ? 'var(--surface-card)' : 'transparent',
    color: active ? 'var(--navy-800)' : 'var(--text-muted)',
    boxShadow: active ? 'var(--shadow-sm)' : 'none',
    transition: 'var(--transition-base)',
  };
}

export function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [role, setRole] = useState<UserRole>('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [saqOpen, setSaqOpen] = useState(false);

  const isClient = role === 'client';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await signIn(email, password);
      navigate(isClient ? '/client' : '/admin');
    } catch {
      setError('تعذّر تسجيل الدخول. تحقق من البريد الإلكتروني وكلمة المرور.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthShell>
      <Link
        to="/consult"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          width: '100%',
          padding: '14px 16px',
          marginBottom: 22,
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--gold-300)',
          background: 'var(--gold-50)',
          cursor: 'pointer',
          textAlign: 'start',
          textDecoration: 'none',
        }}
      >
        <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--gold-600)', color: 'var(--navy-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
          <Sparkles size={20} strokeWidth={1.8} />
        </span>
        <span style={{ flex: 1 }}>
          <b style={{ display: 'block', fontSize: 14.5, color: 'var(--navy-800)' }}>استشارة قانونية مجانية بالذكاء الاصطناعي</b>
          <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>متاحة للجميع — بدون تسجيل دخول</span>
        </span>
        <ArrowLeft size={18} strokeWidth={1.8} style={{ color: 'var(--gold-700)', flex: 'none' }} />
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '0 0 22px', color: 'var(--text-subtle)', fontSize: 13 }}>
        <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
        أو سجّل دخولك
        <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
      </div>

      <div style={{ display: 'flex', gap: 4, padding: 4, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', marginBottom: 28 }}>
        <button type="button" onClick={() => setRole('client')} style={segStyle(isClient)}>
          <User size={18} strokeWidth={1.8} /> عميل
        </button>
        <button type="button" onClick={() => setRole('lawyer')} style={segStyle(!isClient)}>
          <Scale size={18} strokeWidth={1.8} /> موظف المكتب
        </button>
      </div>

      <h2 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 7px' }}>
        {isClient ? 'تسجيل دخول العميل' : 'تسجيل دخول الموظف'}
      </h2>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: '0 0 26px', lineHeight: 1.6 }}>
        {isClient ? 'أدخل بياناتك للوصول إلى استشاراتك وقضاياك.' : 'دخول فريق المكتب إلى لوحة الإدارة والتحكم.'}
      </p>

      <form onSubmit={handleSubmit}>
        <TextField label="البريد الإلكتروني" type="email" placeholder="name@example.com" required autoComplete="email" dir="ltr" style={{ textAlign: 'right' }} value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="كلمة المرور" type="password" placeholder="••••••••" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '2px 0 22px', fontSize: 13.5 }}>
          <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', cursor: 'pointer' }}>
            <input type="checkbox" style={{ width: 16, height: 16, accentColor: 'var(--navy-800)' }} /> تذكّرني
          </label>
          <a href="#" style={{ fontWeight: 600, color: 'var(--navy-600)' }}>
            نسيت كلمة المرور؟
          </a>
        </div>

        {error && (
          <div style={{ marginBottom: 16, padding: '10px 13px', background: 'var(--danger-100)', color: 'var(--danger-600)', borderRadius: 'var(--radius-md)', fontSize: 13.5 }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            width: '100%',
            height: 50,
            border: '1px solid var(--navy-800)',
            borderRadius: 'var(--radius-button)',
            background: 'var(--navy-800)',
            color: 'var(--ivory)',
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 600,
            cursor: submitting ? 'default' : 'pointer',
            opacity: submitting ? 0.7 : 1,
            transition: 'var(--transition-color)',
          }}
        >
          {submitting ? 'جارِ الدخول…' : 'دخول'}
        </button>
      </form>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '20px 0', color: 'var(--text-subtle)', fontSize: 13 }}>
        <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
        أو
        <span style={{ flex: 1, height: 1, background: 'var(--border-subtle)' }} />
      </div>

      <button
        type="button"
        onClick={() => setSaqOpen(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          width: '100%',
          height: 50,
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-button)',
          background: 'var(--white)',
          color: 'var(--navy-800)',
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '5px 12px', borderRadius: 'var(--radius-sm)', background: '#1F9D8F', color: '#fff', fontSize: 15, fontWeight: 700 }}>
          نفاذ
        </span>
        الدخول عبر النفاذ الوطني الموحّد
      </button>
      {saqOpen && (
        <div style={{ marginTop: 10, fontSize: 12.5, color: 'var(--text-muted)', textAlign: 'center' }}>
          الدخول عبر النفاذ الوطني الموحّد غير مفعّل في هذه النسخة — استخدم البريد الإلكتروني وكلمة المرور.
        </div>
      )}

      <div style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-muted)', marginTop: 22 }}>
        {isClient ? 'ليس لديك حساب؟' : 'مشكلة في الدخول؟'}{' '}
        {isClient ? (
          <Link to="/signup" style={{ fontWeight: 600, color: 'var(--navy-700)' }}>
            أنشئ حساباً
          </Link>
        ) : (
          <Link to="/signup" style={{ fontWeight: 600, color: 'var(--navy-700)' }}>
            انضم كمحامٍ للمكتب
          </Link>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 9,
          alignItems: 'flex-start',
          marginTop: 22,
          padding: '11px 13px',
          background: 'var(--gold-50)',
          border: '1px solid var(--border-subtle)',
          borderInlineStart: '3px solid var(--gold-600)',
          borderRadius: 'var(--radius-md)',
          fontSize: 12.5,
          color: 'var(--text-muted)',
          lineHeight: 1.6,
        }}
      >
        <Info size={16} strokeWidth={1.8} style={{ flex: 'none', color: 'var(--gold-700)', marginTop: 1 }} />
        <span>سجّل دخولك للوصول إلى {isClient ? 'لوحة العميل' : 'لوحة الإدارة'}.</span>
      </div>
    </AuthShell>
  );
}
