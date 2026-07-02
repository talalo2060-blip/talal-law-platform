import type { LucideIcon } from 'lucide-react';
import { Card } from './Card';
import { IconTile } from './IconTile';

export function StatCard({ icon, value, label }: { icon: LucideIcon; value: string; label: string }) {
  return (
    <Card padding="20px 22px" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <IconTile icon={icon} />
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 700, color: 'var(--text-strong)', lineHeight: 1 }}>
          {value}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 5 }}>{label}</div>
      </div>
    </Card>
  );
}
