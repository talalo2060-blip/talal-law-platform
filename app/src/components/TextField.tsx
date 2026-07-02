import type { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TextField({ label, style, ...rest }: TextFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
      <label style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-body)' }}>{label}</label>
      <input
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          color: 'var(--text-strong)',
          height: 46,
          padding: '0 14px',
          background: 'var(--white)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-input)',
          boxShadow: 'var(--shadow-inset)',
          outline: 'none',
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
