import { Card } from '../../components/Card';
import { BreakdownList, PerfList, VBarChart } from '../../components/Bars';
import { caseTypeBreakdown, lawyerPerformance, monthlyRevenue, reportStats as computeReportStats } from '../../lib/adminStats';
import type { CaseRecord, ConsultationRecord, UserProfile } from '../../types';

export function ReportsSection({
  cases,
  consultations,
  lawyers,
}: {
  cases: CaseRecord[];
  consultations: ConsultationRecord[];
  lawyers: UserProfile[];
}) {
  const stats = computeReportStats(cases, consultations, lawyers);
  const revenue = monthlyRevenue(cases);
  const breakdown = caseTypeBreakdown(cases);
  const perf = lawyerPerformance(lawyers, cases);

  return (
    <div className="animate-in" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
        {stats.map((r) => (
          <Card key={r.label} padding={20}>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>{r.label}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 700, color: 'var(--text-strong)' }}>{r.value}</div>
          </Card>
        ))}
      </div>

      <Card padding={24}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <b style={{ fontSize: 16, color: 'var(--text-strong)' }}>الإيرادات الشهرية (ألف ر.س)</b>
          <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>آخر ٧ أشهر</span>
        </div>
        <VBarChart data={revenue.map((r) => ({ label: r.label, value: Math.round(r.value / 1000) }))} height={200} />
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <Card padding={24}>
          <b style={{ fontSize: 16, color: 'var(--text-strong)', display: 'block', marginBottom: 20 }}>توزيع القضايا حسب النوع</b>
          <BreakdownList data={breakdown} />
        </Card>
        <Card padding={24}>
          <b style={{ fontSize: 16, color: 'var(--text-strong)', display: 'block', marginBottom: 20 }}>أداء المحامين</b>
          {perf.length > 0 ? <PerfList data={perf} /> : <div style={{ color: 'var(--text-subtle)', fontSize: 13.5 }}>لا توجد بيانات كافية بعد.</div>}
        </Card>
      </div>
    </div>
  );
}
