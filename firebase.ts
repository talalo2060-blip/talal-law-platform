import type { CSSProperties, ReactNode } from 'react';

export function Card({
  children,
  accent = false,
  padding = 22,
  style,
}: {
  children: ReactNode;
  accent?: boolean;
  padding?: number | string;
  style?: CSSProperties;
}) {
  const base: CSSProperties = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderTop: accent ? '3px solid var(--gold-600)' : undefined,
    borderRadius: 'var(--radius-card)',
    boxShadow: 'var(--shadow-sm)',
    padding,
    ...style,
  };
  return <div style={base}>{children}</div>;
}
