import type { ButtonHTMLAttributes, CSSProperties } from 'react';

type Variant = 'primary' | 'outline' | 'danger-outline' | 'gold' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  height?: number;
  fullWidth?: boolean;
}

const VARIANT_STYLE: Record<Variant, CSSProperties> = {
  primary: {
    border: '1px solid var(--navy-800)',
    background: 'var(--navy-800)',
    color: 'var(--ivory)',
  },
  outline: {
    border: '1px solid var(--border-default)',
    background: 'var(--white)',
    color: 'var(--navy-800)',
  },
  'danger-outline': {
    border: '1px solid var(--border-default)',
    background: 'var(--white)',
    color: 'var(--danger-600)',
  },
  gold: {
    border: '1px solid var(--gold-600)',
    background: 'var(--gold-600)',
    color: 'var(--navy-900)',
  },
  ghost: {
    border: 'none',
    background: 'none',
    color: 'var(--navy-700)',
  },
};

export function Button({
  variant = 'primary',
  height = 44,
  fullWidth = false,
  style,
  children,
  ...rest
}: ButtonProps) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height,
    padding: '0 18px',
    width: fullWidth ? '100%' : undefined,
    borderRadius: 'var(--radius-button)',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'var(--transition-color)',
    ...VARIANT_STYLE[variant],
    ...style,
  };
  return (
    <button style={base} {...rest}>
      {children}
    </button>
  );
}
