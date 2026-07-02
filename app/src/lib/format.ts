export function initials(name: string): string {
  const clean = name.replace(/^(أ\.|م\.|د\.)\s*/, '').trim();
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

export type Tone = 'success' | 'warning' | 'brand' | 'accent' | 'neutral' | 'danger';

export const TONE_COLORS: Record<Tone, [string, string]> = {
  success: ['var(--success-100)', 'var(--success-600)'],
  warning: ['var(--warning-100)', 'var(--warning-600)'],
  brand: ['var(--navy-50)', 'var(--navy-700)'],
  accent: ['var(--gold-100)', 'var(--gold-800)'],
  neutral: ['var(--ink-100)', 'var(--ink-700)'],
  danger: ['var(--danger-100)', 'var(--danger-600)'],
};

export const BAR_COLORS: Record<string, string> = {
  warning: 'var(--gold-600)',
  brand: 'var(--navy-500)',
  success: 'var(--success-600)',
};
