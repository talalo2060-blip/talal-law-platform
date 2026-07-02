import { CATEGORY_LABELS, type CaseCategory, type CaseRecord, type ConsultationRecord, type UserProfile } from '../types';

const AR_MONTHS = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];

function lastNMonths(n: number) {
  const now = new Date();
  const months: { year: number; month: number; label: string }[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth(), label: AR_MONTHS[d.getMonth()] });
  }
  return months;
}

export function monthlyConsultationTrend(consultations: ConsultationRecord[], months = 7) {
  const buckets = lastNMonths(months);
  return buckets.map(({ year, month, label }) => ({
    label,
    value: consultations.filter((c) => {
      const d = new Date(c.createdAt);
      return d.getFullYear() === year && d.getMonth() === month;
    }).length,
  }));
}

export function monthlyRevenue(cases: CaseRecord[], months = 7) {
  const buckets = lastNMonths(months);
  return buckets.map(({ year, month, label }) => ({
    label,
    value: cases
      .filter((c) => {
        const d = new Date(c.createdAt);
        return d.getFullYear() === year && d.getMonth() === month;
      })
      .reduce((sum, c) => sum + (c.feeSar || 0), 0),
  }));
}

export function caseTypeBreakdown(cases: CaseRecord[]) {
  const total = cases.length || 1;
  const counts: Record<CaseCategory, number> = { commercial: 0, labor: 0, realestate: 0, family: 0 };
  cases.forEach((c) => { counts[c.type] = (counts[c.type] || 0) + 1; });
  return (Object.keys(CATEGORY_LABELS) as CaseCategory[])
    .map((key) => ({ label: CATEGORY_LABELS[key], pct: Math.round((counts[key] / total) * 100) }))
    .sort((a, b) => b.pct - a.pct);
}

export function lawyerPerformance(lawyers: UserProfile[], cases: CaseRecord[]) {
  return lawyers
    .filter((l) => l.status === 'active')
    .map((l) => {
      const own = cases.filter((c) => c.lawyerId === l.uid);
      const pct = own.length > 0
        ? Math.round((own.filter((c) => c.status === 'مكتملة').length / own.length) * 100)
        : Math.round((l.rating ?? 5) * 20);
      return { label: l.name, pct };
    })
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 5);
}

export function reportStats(cases: CaseRecord[], consultations: ConsultationRecord[], lawyers: UserProfile[]) {
  const completedCases = cases.filter((c) => c.status === 'مكتملة').length;
  const completionRate = cases.length > 0 ? Math.round((completedCases / cases.length) * 100) : 0;

  const responded = consultations.filter((c) => c.respondedAt);
  const avgResponseHours = responded.length > 0
    ? responded.reduce((sum, c) => sum + (c.respondedAt! - c.createdAt), 0) / responded.length / 3_600_000
    : 0;

  const activeLawyers = lawyers.filter((l) => l.status === 'active');
  const avgRating = activeLawyers.length > 0
    ? activeLawyers.reduce((sum, l) => sum + (l.rating ?? 5), 0) / activeLawyers.length
    : 0;

  const completedConsults = consultations.filter((c) => c.status === 'مكتملة').length;

  return [
    { label: 'متوسط وقت الرد', value: responded.length > 0 ? `${avgResponseHours.toFixed(1)} س` : '—' },
    { label: 'نسبة القضايا المكتملة', value: `${completionRate}%` },
    { label: 'متوسط تقييم المحامين', value: activeLawyers.length > 0 ? `${avgRating.toFixed(1)}/5` : '—' },
    { label: 'استشارات مكتملة', value: String(completedConsults) },
  ];
}
