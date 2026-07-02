import { Check, Star, UserPlus } from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CATEGORY_LABELS } from '../../types';
import { initials } from '../../lib/format';
import type { CaseRecord, UserProfile } from '../../types';

export function LawyersSection({
  lawyers,
  cases,
  onApprove,
  onReject,
}: {
  lawyers: UserProfile[];
  cases: CaseRecord[];
  onApprove: (uid: string) => void;
  onReject: (uid: string) => void;
}) {
  const requests = [...lawyers].sort((a, b) => b.createdAt - a.createdAt);
  const active = lawyers.filter((l) => l.status === 'active');
  const pendingCount = lawyers.filter((l) => l.status === 'pending').length;

  return (
    <div className="animate-in" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Card padding={0} style={{ overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <UserPlus size={18} strokeWidth={1.8} style={{ color: 'var(--gold-700)' }} />
          <b style={{ fontSize: 15.5, color: 'var(--text-strong)' }}>طلبات التوظيف والعضوية</b>
          {pendingCount > 0 && (
            <span style={{ minWidth: 22, height: 22, padding: '0 7px', borderRadius: 'var(--radius-pill)', background: 'var(--gold-100)', color: 'var(--gold-800)', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {pendingCount}
            </span>
          )}
        </div>
        {requests.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-subtle)', fontSize: 13.5 }}>لا يوجد محامون بعد.</div>}
        {requests.map((p) => (
          <div key={p.uid} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
            <Avatar label={initials(p.name)} size={42} bg="var(--navy-100)" fg="var(--navy-800)" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <b style={{ fontSize: 14.5, color: 'var(--text-strong)' }}>{p.name}</b>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
                {p.specialty ? CATEGORY_LABELS[p.specialty] : ''} · رخصة <span style={{ fontFamily: 'var(--font-mono)' }}>{p.licenseNumber}</span>
              </div>
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-subtle)', width: 90 }}>{new Date(p.createdAt).toLocaleDateString('ar-SA')}</span>
            {p.status === 'pending' ? (
              <div style={{ display: 'flex', gap: 8 }}>
                <Button variant="primary" height={36} onClick={() => onApprove(p.uid)}>
                  <Check size={15} strokeWidth={1.8} />قبول
                </Button>
                <Button variant="danger-outline" height={36} onClick={() => onReject(p.uid)}>
                  رفض
                </Button>
              </div>
            ) : (
              <Badge tone={p.status === 'active' ? 'success' : 'danger'}>{p.status === 'active' ? 'تم القبول' : 'مرفوض'}</Badge>
            )}
          </div>
        ))}
      </Card>

      <Card padding={0} style={{ overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)' }}>
          <b style={{ fontSize: 15.5, color: 'var(--text-strong)' }}>المحامون النشطون</b>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.4fr 1fr 1fr 0.9fr', padding: '12px 22px', background: 'var(--surface-sunken)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>
          <span>المحامي</span>
          <span>التخصص</span>
          <span>القضايا</span>
          <span>التقييم</span>
          <span>الحالة</span>
        </div>
        {active.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-subtle)', fontSize: 13.5 }}>لا يوجد محامون نشطون بعد.</div>}
        {active.map((l) => {
          const caseCount = cases.filter((c) => c.lawyerId === l.uid).length;
          return (
            <div key={l.uid} style={{ display: 'grid', gridTemplateColumns: '2fr 1.4fr 1fr 1fr 0.9fr', alignItems: 'center', padding: '13px 22px', borderBottom: '1px solid var(--border-subtle)', fontSize: 13.5, color: 'var(--text-body)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <Avatar label={initials(l.name)} size={34} bg="var(--navy-100)" fg="var(--navy-800)" fontSize={12.5} />
                <b style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{l.name}</b>
              </span>
              <span>{l.specialty ? CATEGORY_LABELS[l.specialty] : '—'}</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>{caseCount}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--gold-700)', fontWeight: 600 }}>
                <Star size={14} strokeWidth={1.8} style={{ fill: 'var(--gold-500)', color: 'var(--gold-500)' }} />
                {l.rating ?? 5}
              </span>
              <span>
                <Badge tone="success">نشط</Badge>
              </span>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
