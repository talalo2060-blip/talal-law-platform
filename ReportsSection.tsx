import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import {
  Bell,
  Calendar,
  CalendarClock,
  Folder,
  LogOut,
  MessageSquare,
  MessageSquareText,
  Phone,
  Plus,
  Scale,
  Star,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import talalMark from '../assets/talal-mark.svg';
import { Avatar } from '../components/Avatar';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { HBar } from '../components/Bars';
import { StatCard } from '../components/StatCard';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { callConsult } from '../lib/consultApi';
import { initials } from '../lib/format';
import { CATEGORY_LABELS, type CaseCategory, type CaseRecord, type ConsultationRecord, type UserProfile, type AppointmentRecord } from '../types';

const CASE_TONE: Record<CaseRecord['status'], 'warning' | 'brand' | 'success'> = {
  'قيد النظر': 'warning',
  'نشطة': 'brand',
  'مكتملة': 'success',
};

export function ClientDashboard() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<'consult' | 'cases'>('consult');
  const [cases, setCases] = useState<CaseRecord[]>([]);
  const [consultations, setConsultations] = useState<ConsultationRecord[]>([]);
  const [appointment, setAppointment] = useState<AppointmentRecord | null>(null);
  const [lawyer, setLawyer] = useState<UserProfile | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!profile) return;
    const unsubCases = onSnapshot(
      query(collection(db, 'cases'), where('clientId', '==', profile.uid), orderBy('createdAt', 'desc')),
      (snap) => setCases(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as CaseRecord)),
    );
    const unsubConsults = onSnapshot(
      query(collection(db, 'consultations'), where('clientId', '==', profile.uid), orderBy('createdAt', 'desc')),
      (snap) => setConsultations(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as ConsultationRecord)),
    );
    const unsubAppt = onSnapshot(
      query(collection(db, 'appointments'), where('clientId', '==', profile.uid)),
      (snap) => setAppointment(snap.docs[0] ? ({ id: snap.docs[0].id, ...snap.docs[0].data() } as AppointmentRecord) : null),
    );
    return () => {
      unsubCases();
      unsubConsults();
      unsubAppt();
    };
  }, [profile]);

  useEffect(() => {
    if (!profile?.assignedLawyerId) {
      setLawyer(null);
      return;
    }
    return onSnapshot(doc(db, 'users', profile.assignedLawyerId), (snap) => {
      setLawyer(snap.exists() ? (snap.data() as UserProfile) : null);
    });
  }, [profile?.assignedLawyerId]);

  async function handleSignOut() {
    await signOut();
    navigate('/login');
  }

  if (!profile) return null;

  const thisMonthCount = consultations.filter((c) => {
    const d = new Date(c.createdAt);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  const activeCasesCount = cases.filter((c) => c.status !== 'مكتملة').length;

  return (
    <div className="animate-in" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 32px 56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid var(--border-subtle)', marginBottom: 32, position: 'sticky', top: 0, background: 'var(--surface-page)', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--navy-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <img src={talalMark} style={{ width: 26, height: 26, filter: 'brightness(0) invert(1)' }} alt="" />
          </span>
          <div>
            <b style={{ display: 'block', fontSize: 15, color: 'var(--text-strong)' }}>مكتب طلال للمحاماة والاستشارات</b>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>بوابة العميل</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border-subtle)', background: 'var(--white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--navy-700)', position: 'relative' }}>
            <Bell size={18} strokeWidth={1.8} />
            <span style={{ position: 'absolute', top: 8, left: 8, width: 7, height: 7, borderRadius: '50%', background: 'var(--gold-600)' }} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ textAlign: 'left' }}>
              <b style={{ display: 'block', fontSize: 13.5, color: 'var(--text-strong)' }}>{profile.name}</b>
              <span style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>عميل</span>
            </div>
            <Avatar label={initials(profile.name)} />
          </div>
          <Button variant="outline" height={40} onClick={handleSignOut}>
            <LogOut size={16} strokeWidth={1.8} /> خروج
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 27, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 6px' }}>أهلاً، {profile.name.split(/\s+/)[0]} 👋</h1>
        <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: 0 }}>هذه نظرة سريعة على استشاراتك وقضاياك والمحامي المسؤول عنك.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginBottom: 24 }}>
        <StatCard icon={Folder} value={String(activeCasesCount)} label="قضايا نشطة" />
        <StatCard icon={MessageSquareText} value={String(thisMonthCount)} label="استشارات هذا الشهر" />
        <StatCard icon={CalendarClock} value={appointment ? '1' : '0'} label="موعد قادم" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-subtle)', marginBottom: 20 }}>
            <button onClick={() => setTab('consult')} style={tabStyle(tab === 'consult')}>
              استشاراتي<span style={{ marginInlineStart: 6, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-subtle)' }}>{consultations.length}</span>
            </button>
            <button onClick={() => setTab('cases')} style={tabStyle(tab === 'cases')}>
              قضاياي<span style={{ marginInlineStart: 6, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-subtle)' }}>{cases.length}</span>
            </button>
          </div>

          {tab === 'consult' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {consultations.length === 0 && <EmptyNote text="لا توجد استشارات بعد." />}
              {consultations.map((c) => (
                <Card key={c.id} padding="18px 20px">
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--navy-50)', color: 'var(--navy-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                        <MessageSquareText size={18} strokeWidth={1.8} />
                      </span>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.5 }}>{c.question}</div>
                        <div style={{ fontSize: 12.5, color: 'var(--text-subtle)', marginTop: 4 }}>{new Date(c.createdAt).toLocaleDateString('ar-SA')}</div>
                      </div>
                    </div>
                    <Badge tone={c.status === 'مكتملة' ? 'success' : 'warning'}>{c.status}</Badge>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '9px 12px', background: 'var(--gold-50)', borderInlineStart: '2.5px solid var(--gold-600)', borderRadius: 'var(--radius-sm)', fontSize: 12.5, color: 'var(--text-muted)' }}>
                    المصدر النظامي: <b style={{ color: 'var(--text-body)', fontWeight: 600 }}>{c.citation}</b>
                  </div>
                  {c.staffReply && (
                    <div style={{ marginTop: 10, padding: '10px 12px', background: 'var(--navy-50)', borderRadius: 'var(--radius-sm)', fontSize: 13, color: 'var(--text-body)', lineHeight: 1.7 }}>
                      <b style={{ color: 'var(--navy-700)' }}>ردّ المكتب: </b>
                      {c.staffReply}
                    </div>
                  )}
                  {!c.needsReply && !c.staffReply && (
                    <button
                      onClick={() => updateDoc(doc(db, 'consultations', c.id), { needsReply: true, status: 'قيد المعالجة', priority: 'عادي' })}
                      style={{ marginTop: 10, border: 'none', background: 'none', color: 'var(--navy-600)', fontSize: 12.5, fontWeight: 600, cursor: 'pointer', padding: 0 }}
                    >
                      اطلب مراجعة محامٍ من المكتب
                    </button>
                  )}
                </Card>
              ))}
              <Button variant="primary" style={{ alignSelf: 'flex-start' }} onClick={() => setModalOpen(true)}>
                <Plus size={17} strokeWidth={1.8} /> استشارة جديدة
              </Button>
            </div>
          )}

          {tab === 'cases' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {cases.length === 0 && <EmptyNote text="لا توجد قضايا بعد." />}
              {cases.map((k) => (
                <Card key={k.id} padding="18px 20px">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--navy-600)', background: 'var(--navy-50)', padding: '3px 8px', borderRadius: 'var(--radius-sm)' }}>{k.id.slice(0, 8).toUpperCase()}</span>
                      <b style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text-strong)' }}>{k.title}</b>
                    </div>
                    <Badge tone={CASE_TONE[k.status]}>{k.status}</Badge>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <HBar pct={k.progress} color={{ warning: 'var(--gold-600)', brand: 'var(--navy-500)', success: 'var(--success-600)' }[CASE_TONE[k.status]]} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--text-muted)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <Scale size={14} strokeWidth={1.8} /> {k.lawyerName}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <Calendar size={14} strokeWidth={1.8} /> التالي: {k.nextEvent}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card accent>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.04em', color: 'var(--text-subtle)', marginBottom: 16 }}>المحامي المسؤول عني</div>
            {lawyer ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Avatar label={initials(lawyer.name)} size={72} fontSize={26} bg="var(--navy-100)" fg="var(--navy-800)" ring />
                  <b style={{ fontSize: 17, color: 'var(--text-strong)', marginTop: 14 }}>{lawyer.name}</b>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 3 }}>
                    محامٍ — {lawyer.specialty ? CATEGORY_LABELS[lawyer.specialty] : ''}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 8, color: 'var(--gold-700)', fontSize: 13, fontWeight: 600 }}>
                    <Star size={15} strokeWidth={1.8} style={{ fill: 'var(--gold-500)', color: 'var(--gold-500)' }} /> {lawyer.rating ?? 5} · {lawyer.casesCount ?? 0} قضية
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                  <Button variant="primary" style={{ flex: 1 }} height={42}>
                    <MessageSquare size={16} strokeWidth={1.8} /> مراسلة
                  </Button>
                  <button style={{ width: 44, height: 42, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', background: 'var(--white)', color: 'var(--navy-800)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={16} strokeWidth={1.8} />
                  </button>
                </div>
              </>
            ) : (
              <div style={{ fontSize: 13.5, color: 'var(--text-subtle)', textAlign: 'center', padding: '10px 0' }}>
                لم يُعيَّن محامٍ لك بعد. سيتم تعيين محامٍ عند فتح أول قضية أو استشارة.
              </div>
            )}
          </Card>

          {appointment && (
            <div style={{ background: 'var(--navy-800)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-md)', padding: 22, color: 'var(--ivory)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'var(--gold-500)', marginBottom: 14 }}>
                <CalendarClock size={16} strokeWidth={1.8} /> الموعد القادم
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{appointment.title}</div>
              <div style={{ fontSize: 13.5, color: 'var(--navy-200)', lineHeight: 1.7 }}>
                {appointment.dateLabel}
                <br />
                {appointment.location}
              </div>
              <button style={{ marginTop: 16, width: '100%', height: 42, borderRadius: 'var(--radius-md)', border: '1px solid var(--gold-600)', background: 'var(--gold-600)', color: 'var(--navy-900)', fontFamily: 'var(--font-sans)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>
                إضافة إلى التقويم
              </button>
            </div>
          )}
        </div>
      </div>

      {modalOpen && (
        <NewConsultModal
          clientId={profile.uid}
          clientName={profile.name}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

function tabStyle(active: boolean) {
  return {
    position: 'relative' as const,
    padding: '12px 18px',
    border: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    fontWeight: active ? 600 : 500,
    color: active ? 'var(--navy-800)' : 'var(--text-muted)',
    cursor: 'pointer',
    borderBottom: active ? '2.5px solid var(--gold-600)' : '2.5px solid transparent',
    marginBottom: -1,
  };
}

function EmptyNote({ text }: { text: string }) {
  return <div style={{ padding: 20, textAlign: 'center', color: 'var(--text-subtle)', fontSize: 13.5 }}>{text}</div>;
}

function NewConsultModal({ clientId, clientName, onClose }: { clientId: string; clientName: string; onClose: () => void }) {
  const [question, setQuestion] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = question.trim();
    if (!q) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await callConsult(q);
      const category = (Object.keys(CATEGORY_LABELS) as CaseCategory[]).find(
        (key) => res.citation.includes(CATEGORY_LABELS[key]) || res.lawyer?.specialtyLabel === CATEGORY_LABELS[key],
      );
      await addDoc(collection(db, 'consultations'), {
        clientId,
        clientName,
        question: q,
        answer: res.answer,
        citation: res.citation,
        category: category ?? 'commercial',
        suggestedLawyerId: res.lawyer?.id ?? null,
        suggestedLawyerName: res.lawyer?.name ?? null,
        status: 'مكتملة',
        needsReply: false,
        priority: 'عادي',
        createdAt: Date.now(),
      });
      if (res.lawyer) {
        await updateDoc(doc(db, 'users', clientId), { assignedLawyerId: res.lawyer.id }).catch(() => {});
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'تعذّر إرسال الاستشارة الآن. حاول مرة أخرى.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,42,74,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 480, background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-xl)', padding: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <b style={{ fontSize: 18, color: 'var(--text-strong)' }}>استشارة جديدة</b>
          <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="اكتب سؤالك القانوني هنا…"
            rows={4}
            style={{ width: '100%', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-strong)', padding: 14, background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-inset)', outline: 'none', resize: 'vertical', marginBottom: 14 }}
          />
          {error && <div style={{ marginBottom: 14, padding: '10px 13px', background: 'var(--danger-100)', color: 'var(--danger-600)', borderRadius: 'var(--radius-md)', fontSize: 13.5 }}>{error}</div>}
          <Button type="submit" variant="primary" fullWidth height={48} disabled={submitting}>
            {submitting ? 'جارِ الإرسال…' : 'إرسال السؤال'}
          </Button>
        </form>
      </div>
    </div>
  );
}
