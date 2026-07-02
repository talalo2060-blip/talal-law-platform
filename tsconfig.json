import { useState } from 'react';
import { MessageSquareText, Reply, X } from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { initials } from '../../lib/format';
import { CATEGORY_LABELS, type CaseRecord, type ConsultationRecord } from '../../types';

const CASE_TONE: Record<CaseRecord['status'], 'warning' | 'brand' | 'success'> = {
  'قيد النظر': 'warning',
  'نشطة': 'brand',
  'مكتملة': 'success',
};

const PRIORITY_TONE: Record<ConsultationRecord['priority'], 'danger' | 'warning' | 'neutral'> = {
  'عاجل': 'danger',
  'متوسط': 'warning',
  'عادي': 'neutral',
};

export function CasesSection({
  cases,
  pendingConsults,
  onReply,
}: {
  cases: CaseRecord[];
  pendingConsults: ConsultationRecord[];
  onReply: (id: string, reply: string) => Promise<void>;
}) {
  const [replyTarget, setReplyTarget] = useState<ConsultationRecord | null>(null);

  return (
    <div className="animate-in" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Card padding={0} style={{ overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
          <b style={{ fontSize: 15.5, color: 'var(--text-strong)' }}>القضايا</b>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1.4fr 1fr 1fr', padding: '12px 22px', background: 'var(--surface-sunken)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>
          <span>الرقم</span>
          <span>العميل</span>
          <span>المحامي</span>
          <span>النوع</span>
          <span>الحالة</span>
        </div>
        {cases.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-subtle)', fontSize: 13.5 }}>لا توجد قضايا بعد.</div>}
        {cases.map((k) => (
          <div key={k.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1.4fr 1fr 1fr', alignItems: 'center', padding: '13px 22px', borderBottom: '1px solid var(--border-subtle)', fontSize: 13.5, color: 'var(--text-body)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--navy-600)' }}>{k.id.slice(0, 8).toUpperCase()}</span>
            <span style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{k.clientName}</span>
            <span>{k.lawyerName}</span>
            <span>{CATEGORY_LABELS[k.type]}</span>
            <span>
              <Badge tone={CASE_TONE[k.status]}>{k.status}</Badge>
            </span>
          </div>
        ))}
      </Card>

      <Card padding={0} style={{ overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <MessageSquareText size={18} strokeWidth={1.8} style={{ color: 'var(--gold-700)' }} />
          <b style={{ fontSize: 15.5, color: 'var(--text-strong)' }}>استشارات بانتظار الرد</b>
        </div>
        {pendingConsults.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-subtle)', fontSize: 13.5 }}>لا توجد استشارات بانتظار الرد.</div>}
        {pendingConsults.map((q) => (
          <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
            <Avatar label={initials(q.clientName)} size={38} bg="var(--navy-100)" fg="var(--navy-800)" fontSize={13} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <b style={{ fontSize: 14, color: 'var(--text-strong)', fontWeight: 600 }}>{q.question}</b>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
                {q.clientName} · {new Date(q.createdAt).toLocaleDateString('ar-SA')}
              </div>
            </div>
            <Badge tone={PRIORITY_TONE[q.priority]}>{q.priority}</Badge>
            <Button variant="primary" height={36} onClick={() => setReplyTarget(q)}>
              <Reply size={15} strokeWidth={1.8} />رد
            </Button>
          </div>
        ))}
      </Card>

      {replyTarget && (
        <ReplyModal
          consultation={replyTarget}
          onClose={() => setReplyTarget(null)}
          onSubmit={async (reply) => {
            await onReply(replyTarget.id, reply);
            setReplyTarget(null);
          }}
        />
      )}
    </div>
  );
}

function ReplyModal({
  consultation,
  onClose,
  onSubmit,
}: {
  consultation: ConsultationRecord;
  onClose: () => void;
  onSubmit: (reply: string) => Promise<void>;
}) {
  const [reply, setReply] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim()) return;
    setSubmitting(true);
    await onSubmit(reply.trim());
    setSubmitting(false);
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,42,74,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 520, background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-xl)', padding: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <b style={{ fontSize: 18, color: 'var(--text-strong)' }}>الرد على الاستشارة</b>
          <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>
        <p style={{ fontSize: 13.5, color: 'var(--text-muted)', margin: '0 0 16px', lineHeight: 1.7 }}>{consultation.question}</p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="اكتب ردّ المكتب هنا…"
            rows={5}
            style={{ width: '100%', fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-strong)', padding: 14, background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-inset)', outline: 'none', resize: 'vertical', marginBottom: 16 }}
          />
          <Button type="submit" variant="primary" fullWidth height={46} disabled={submitting}>
            {submitting ? 'جارِ الإرسال…' : 'إرسال الرد'}
          </Button>
        </form>
      </div>
    </div>
  );
}
