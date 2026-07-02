import { useState, type CSSProperties } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, User } from 'lucide-react';
import { AuthShell } from '../components/AuthShell';
import { TextField } from '../components/TextField';
import { useAuth } from '../contexts/AuthContext';
import { CATEGORY_LABELS, type CaseCategory, type UserRole } from '../types';

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

const selectStyle: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  color: 'var(--text-strong)',
  height: 46,
  padding: '0 14px',
  background: 'var(--white)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-input)',
  boxShadow: 'var(--shadow-inset)',
  outline: 'none',
};

export function SignupPage() {
  const navigate = useNavigate();
  const { signUpClient, signUpLawyer } = useAuth();
  const [role, setRole] = useState<UserRole>('client');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clientType, setClientType] = useState<'فرد' | 'منشأة'>('فرد');
  const [specialty, setSpecialty] = useState<CaseCategory>('commercial');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const isClient = role === 'client';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      if (isClient) {
        await signUpClient({ name, email, password, clientType });
        navigate('/client');
      } else {
        await signUpLawyer({ name, email, password, specialty, licenseNumber });
        navigate('/pending');
      }
    } catch {
      setError('تعذّر إنشاء الحساب. تحقق من البيانات أو جرّب بريداً إلكترونياً آخر.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthShell>
      <div style={{ display: 'flex', gap: 4, padding: 4, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', marginBottom: 28 }}>
        <button type="button" onClick={() => setRole('client')} style={segStyle(isClient)}>
          <User size={18} strokeWidth={1.8} /> عميل
        </button>
        <button type="button" onClick={() => setRole('lawyer')} style={segStyle(!isClient)}>
          <Scale size={18} strokeWidth={1.8} /> محامٍ / موظف
        </button>
      </div>

      <h2 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 7px' }}>
        {isClient ? 'إنشاء حساب عميل' : 'طلب انضمام كمحامٍ'}
      </h2>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: '0 0 26px', lineHeight: 1.6 }}>
        {isClient
          ? 'أنشئ حساباً لمتابعة استشاراتك وقضاياك.'
          : 'يُراجع طلبك من إدارة المكتب قبل تفعيل حسابك.'}
      </p>

      <form onSubmit={handleSubmit}>
        <TextField label="الاسم الكامل" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="البريد الإلكتروني" type="email" placeholder="name@example.com" required dir="ltr" style={{ textAlign: 'right' }} value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="كلمة المرور" type="password" placeholder="••••••••" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />

        {isClient ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
            <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-body)' }}>نوع الحساب</label>
            <select style={selectStyle} value={clientType} onChange={(e) => setClientType(e.target.value as 'فرد' | 'منشأة')}>
              <option value="فرد">فرد</option>
              <option value="منشأة">منشأة</option>
            </select>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
              <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-body)' }}>التخصص</label>
              <select style={selectStyle} value={specialty} onChange={(e) => setSpecialty(e.target.value as CaseCategory)}>
                {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <TextField label="رقم الترخيص" type="text" placeholder="LIC-000000" required value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} />
          </>
        )}

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
          }}
        >
          {submitting ? 'جارِ الإنشاء…' : isClient ? 'إنشاء حساب' : 'إرسال طلب الانضمام'}
        </button>
      </form>

      <div style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-muted)', marginTop: 22 }}>
        لديك حساب بالفعل؟{' '}
        <Link to="/login" style={{ fontWeight: 600, color: 'var(--navy-700)' }}>
          سجّل دخولك
        </Link>
      </div>
    </AuthShell>
  );
}
