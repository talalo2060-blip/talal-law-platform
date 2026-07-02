import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';

export function IconTile({
  icon: Icon,
  size = 46,
  iconSize = 22,
  bg = 'var(--gold-100)',
  fg = 'var(--gold-700)',
  radius = 'var(--radius-md)',
}: {
  icon: LucideIcon;
  size?: number;
  iconSize?: number;
  bg?: string;
  fg?: string;
  radius?: string;
}) {
  const style: CSSProperties = {
    width: size,
    height: size,
    borderRadius: radius,
    background: bg,
    color: fg,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'none',
  };
  return (
    <span style={style}>
      <Icon size={iconSize} strokeWidth={1.8} />
    </span>
  );
}
