import type { CSSProperties } from 'react';

export function Avatar({
  label,
  size = 40,
  bg = 'var(--gold-100)',
  fg = 'var(--gold-800)',
  ring = false,
  fontSize,
}: {
  label: string;
  size?: number;
  bg?: string;
  fg?: string;
  ring?: boolean;
  fontSize?: number;
}) {
  const style: CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    background: bg,
    color: fg,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: fontSize ?? Math.round(size * 0.36),
    flex: 'none',
    boxShadow: ring ? '0 0 0 2px var(--surface-card),0 0 0 5px var(--gold-500)' : undefined,
  };
  return <span style={style}>{label}</span>;
}
