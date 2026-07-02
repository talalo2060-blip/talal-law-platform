import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Avatar } from '../../components/Avatar';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { initials } from '../../lib/format';
import type { CaseRecord, UserProfile } from '../../types';

export function ClientsSection({ clients, cases }: { clients: UserProfile[]; cases: CaseRecord[] }) {
  const [copied, setCopied] = useState(false);

  async function copySignupLink() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/signup`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className="animate-in">
      <Card padding={0} style={{ overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <b style={{ fontSize: 15.5, color: 'var(--text-strong)' }}>قائمة العملاء</b>
          <div style={{ position: 'relative' }}>
            <Button variant="primary" height={38} onClick={copySignupLink}>
              <Plus size={16} strokeWidth={1.8} /> عميل جديد
            </Button>
            {copied && (
              <span style={{ position: 'absolute', insetInlineEnd: 0, top: 44, fontSize: 12, color: 'var(--success-600)', whiteSpace: 'nowrap' }}>
                تم نسخ رابط التسجيل
              </span>
            )}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 0.9fr', padding: '12px 22px', background: 'var(--surface-sunken)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>
          <span>العميل</span>
          <span>النوع</span>
          <span>القضايا</span>
          <span>الانضمام</span>
          <span>الحالة</span>
        </div>
        {clients.length === 0 && <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-subtle)', fontSize: 13.5 }}>لا يوجد عملاء بعد.</div>}
        {clients.map((c) => {
          const caseCount = cases.filter((k) => k.clientId === c.uid).length;
          return (
            <div key={c.uid} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 0.9fr', alignItems: 'center', padding: '13px 22px', borderBottom: '1px solid var(--border-subtle)', fontSize: 13.5, color: 'var(--text-body)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <Avatar label={initials(c.name)} size={34} fontSize={12.5} />
                <b style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{c.name}</b>
              </span>
              <span>{c.clientType ?? 'فرد'}</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>{caseCount}</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>{new Date(c.createdAt).getFullYear()}</span>
              <span>
                <Badge tone="success">نشط</Badge>
              </span>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
