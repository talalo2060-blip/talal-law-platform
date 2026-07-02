export function VBarChart({
  data,
  height = 170,
}: {
  data: { label: string; value: number }[];
  height?: number;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14, height }}>
      {data.map((d, i) => {
        const pct = Math.round((d.value / max) * 100);
        const isLast = i === data.length - 1;
        return (
          <div
            key={d.label}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, height: '100%', justifyContent: 'flex-end' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-subtle)' }}>{d.value}</span>
            <div
              style={{
                width: '100%',
                maxWidth: 40,
                height: `${pct}%`,
                background: isLast ? 'var(--gold-600)' : 'var(--navy-500)',
                borderRadius: '6px 6px 3px 3px',
                transition: 'height .5s var(--ease-standard)',
              }}
            />
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function HBar({ pct, color = 'var(--gold-600)' }: { pct: number; color?: string }) {
  return (
    <div style={{ height: 8, borderRadius: 4, background: 'var(--surface-sunken)', overflow: 'hidden' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 4, transition: 'width .5s var(--ease-standard)' }} />
    </div>
  );
}

export function BreakdownList({ data }: { data: { label: string; pct: number }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {data.map((d) => (
        <div key={d.label}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
            <span style={{ color: 'var(--text-body)' }}>{d.label}</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{d.pct}%</span>
          </div>
          <HBar pct={d.pct} />
        </div>
      ))}
    </div>
  );
}

export function PerfList({ data }: { data: { label: string; pct: number }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {data.map((d) => (
        <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 110, fontSize: 13, color: 'var(--text-body)' }}>{d.label}</span>
          <div style={{ flex: 1 }}>
            <HBar pct={d.pct} color="var(--navy-500)" />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-muted)', width: 34 }}>{d.pct}%</span>
        </div>
      ))}
    </div>
  );
}
