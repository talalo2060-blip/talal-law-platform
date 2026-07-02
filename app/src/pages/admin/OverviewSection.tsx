import { FolderOpen, Scale, TrendingUp, Users, Wallet } from 'lucide-react';
import { Card } from '../../components/Card';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { BreakdownList, VBarChart } from '../../components/Bars';
import { caseTypeBreakdown, monthlyConsultationTrend } from '../../lib/adminStats';
import { initials } from '../../lib/format';
import { CATEGORY_LABELS, type CaseRecord, type ConsultationRecord, type UserProfile } from '../../types';

export function OverviewSection({
  lawyers,
  clients,
  cases,
  consultations,
  onApprove,
  onReject,
  onGoLawyers,
}: {
  lawyers: UserProfile[];
  clients: UserProfile[];
  cases: CaseRecord[];
  consultations: ConsultationRecord[];
  onApprove: (uid: string) => void;
  onReject: (uid: string) => void;
  onGoLawyers: () => void;
}) {
  const activeLawyers = lawyers.filter((l) => l.status === 'active');
  const pending = lawyers.filter((l) => l.status === 'pending');
  const openCases = cases.filter((c) => c.status !== 'مكتملة');
  const revenue = cases.reduce((sum, c) => sum + (c.feeSar || 0), 0);

  const kpis = [
    { icon: Users, value: clients.length.toLocaleString('ar-SA'), label: 'إجمالي العملاء', delta: `${clients.length}` },
    { icon: Scale, value: String(activeLawyers.length), label: 'المحامون النشطون', delta: `${activeLawyers.length}` },
    { icon: FolderOpen, value: String(openCases.length), label: 'قضايا مفتوحة', delta: `${openCases.length}` },
    { icon: Wallet, value: `${(revenue / 1000).toFixed(1)}K`, label: 'الإيرادات (ر.س)', delta: `${(revenue / 1000).toFixed(0)}K` },
  ];

  const trend = monthlyConsultationTrend(consultations);
  const breakdown = caseTypeBreakdown(cases);
  const preview = pending.slice(0, 3);

  return (
    <div className="animate-in" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        {kpis.map((k) => (
          <Card key={k.label} padding={20}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--gold-100)', color: 'var(--gold-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <k.icon size={20} strokeWidth={1.8} />
              </span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--success-600)', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                <TrendingUp size={14} strokeWidth={1.8} />
                {k.delta}
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 27, fontWeight: 700, color: 'var(--text-strong)', lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>{k.label}</div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24, alignItems: 'start' }}>
        <Card padding={24}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
            <b style={{ fontSize: 16, color: 'var(--text-strong)' }}>الاستشارات الشهرية</b>
            <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>آخر ٧ أشهر</span>
          </div>
          <VBarChart data={trend} />
        </Card>
        <Card padding={24}>
          <b style={{ fontSize: 16, color: 'var(--text-strong)', display: 'block', marginBottom: 20 }}>توزيع القضايا حسب النوع</b>
          <BreakdownList data={breakdown} />
        </Card>
      </div>

      <Card padding={24}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <b style={{ fontSize: 16, color: 'var(--text-strong)' }}>طلبات عضوية المحامين</b>
            {pending.length > 0 && (
              <span style={{ minWidth: 22, height: 22, padding: '0 7px', borderRadius: 'var(--radius-pill)', background: 'var(--gold-100)', color: 'var(--gold-800)', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                {pending.length}
              </span>
            )}
          </div>
          <button onClick={onGoLawyers} style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--navy-700)', background: 'none', border: 'none', cursor: 'pointer' }}>
            عرض الكل
          </button>
        </div>
        {preview.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {preview.map((p) => (
              <div key={p.uid} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                <Avatar label={initials(p.name)} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <b style={{ fontSize: 14.5, color: 'var(--text-strong)' }}>{p.name}</b>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
                    {p.specialty ? CATEGORY_LABELS[p.specialty] : ''} · <span style={{ fontFamily: 'var(--font-mono)' }}>{p.licenseNumber}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Button variant="primary" height={34} onClick={() => onApprove(p.uid)}>
                    قبول
                  </Button>
                  <Button variant="danger-outline" height={34} onClick={() => onReject(p.uid)}>
                    رفض
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ padding: 20, textAlign: 'center', color: 'var(--text-subtle)', fontSize: 13.5 }}>لا توجد طلبات معلّقة حالياً.</div>
        )}
      </Card>
    </div>
  );
}
