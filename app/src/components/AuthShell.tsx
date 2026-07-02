import type { ReactNode } from 'react';
import { BookMarked, Clock, ShieldCheck } from 'lucide-react';
import talalMark from '../assets/talal-mark.svg';

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="animate-in" style={{ display: 'flex', minHeight: '100vh' }}>
      <div
        style={{
          flex: '0 0 44%',
          background: 'linear-gradient(155deg,var(--navy-800) 0%,var(--navy-900) 100%)',
          color: 'var(--ivory)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 44px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span style={{ position: 'absolute', width: 460, height: 460, left: -160, bottom: -210, border: '1px solid rgba(184,146,76,0.16)', borderRadius: '50%' }} />
        <span style={{ position: 'absolute', width: 320, height: 320, left: -80, bottom: -130, border: '1px solid rgba(184,146,76,0.14)', borderRadius: '50%' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 13, position: 'relative', zIndex: 2 }}>
          <span style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <img src={talalMark} alt="مكتب طلال" style={{ width: 40, height: 40 }} />
          </span>
          <div>
            <b style={{ display: 'block', fontSize: 17, fontWeight: 700, color: 'var(--ivory)' }}>مكتب طلال للمحاماة والاستشارات</b>
            <span style={{ fontSize: 12.5, color: 'var(--gold-500)', fontWeight: 500 }}>المساعد القانوني الذكي</span>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ width: 44, height: 3, background: 'var(--gold-600)', borderRadius: 2, marginBottom: 22 }} />
          <h1 style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.4, margin: '0 0 18px', color: 'var(--ivory)' }}>
            استشارتك القانونية،
            <br />
            موثّقة بالنظام السعودي.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--navy-200)', maxWidth: 400, margin: 0 }}>
            منصة واحدة لإدارة استشاراتك وقضاياك ومتابعة المحامي المسؤول عنك.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', zIndex: 2 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--navy-200)' }}>
            <ShieldCheck size={17} strokeWidth={1.8} style={{ color: 'var(--gold-500)' }} /> سرّية تامة لبياناتك
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--navy-200)' }}>
            <BookMarked size={17} strokeWidth={1.8} style={{ color: 'var(--gold-500)' }} /> إجابات موثّقة بمصادرها النظامية
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--navy-200)' }}>
            <Clock size={17} strokeWidth={1.8} style={{ color: 'var(--gold-500)' }} /> متابعة على مدار الساعة
          </span>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 404 }}>{children}</div>
      </div>
    </div>
  );
}
