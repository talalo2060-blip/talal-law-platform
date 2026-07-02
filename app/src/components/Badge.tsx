import type { CSSProperties } from 'react';
import { TONE_COLORS, type Tone } from '../lib/format';

export function Badge({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  const [bg, fg] = TONE_COLORS[tone];
  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    padding: '3px 11px',
    borderRadius: 'var(--radius-pill)',
    background: bg,
    color: fg,
    fontSize: 12.5,
    fontWeight: 600,
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
  };
  return <span style={style}>{children}</span>;
}
