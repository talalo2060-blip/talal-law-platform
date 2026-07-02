import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, BookMarked, Info, LogIn, Sparkles, Star, UserCheck } from 'lucide-react';
import talalMark from '../assets/talal-mark.svg';
import { callConsult } from '../lib/consultApi';
import { initials } from '../lib/format';
import type { ChatMessage } from '../types';

const SUGGESTED_CHIPS = [
  'هل يحق لي تعويض عن الفصل من العمل؟',
  'ما إجراءات تسجيل علامة تجارية جديدة؟',
  'هل يمكن إخلاء المستأجر قبل نهاية العقد؟',
  'كيف تُحسب النفقة والحضانة بعد الطلاق؟',
];

export function ConsultPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'مرحباً بك في الاستشارة القانونية المجانية من مكتب طلال. اكتب سؤالك القانوني وسأجيبك استناداً إلى الأنظمة السعودية، ثم أقترح لك المحامي المختص المناسب من المكتب.',
    },
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    });
  }

  async function submit(question: string) {
    const q = question.trim();
    if (!q || sending) return;
    setInput('');
    setErrorMsg('');
    setMessages((prev) => [...prev, { role: 'user', text: q }]);
    setSending(true);
    scrollToBottom();
    try {
      const res = await callConsult(q);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: res.answer,
          citation: res.citation,
          lawyer: res.lawyer ?? undefined,
        },
      ]);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'تعذّر الحصول على إجابة الآن. حاول مجدداً.');
    } finally {
      setSending(false);
      scrollToBottom();
    }
  }

  return (
    <div className="animate-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 32px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--navy-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
            <img src={talalMark} style={{ width: 26, height: 26, filter: 'brightness(0) invert(1)' }} alt="مكتب طلال" />
          </span>
          <div>
            <b style={{ display: 'block', fontSize: 15, color: 'var(--text-strong)' }}>مكتب طلال للمحاماة والاستشارات</b>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>المساعد القانوني الذكي</span>
          </div>
        </div>
        <Link
          to="/login"
          style={{ height: 40, padding: '0 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--navy-800)', background: 'var(--navy-800)', color: 'var(--ivory)', fontSize: 13.5, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 7 }}
        >
          <LogIn size={16} strokeWidth={1.8} /> تسجيل الدخول
        </Link>
      </header>

      <div style={{ flex: 1, width: '100%', maxWidth: 860, margin: '0 auto', padding: '28px 24px 40px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 14px', borderRadius: 'var(--radius-pill)', background: 'var(--gold-100)', color: 'var(--gold-800)', fontSize: 12.5, fontWeight: 600, marginBottom: 14 }}>
            <Sparkles size={15} strokeWidth={1.8} /> مجانية بالكامل · بدون تسجيل
          </span>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 8px' }}>استشارتك القانونية الأولى، الآن</h1>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: '0 auto', maxWidth: 560, lineHeight: 1.7 }}>
            اطرح سؤالك القانوني واحصل على إجابة موثّقة بالأنظمة السعودية، مع اقتراح المحامي المختص من مكتب طلال لمتابعة قضيتك.
          </p>
        </div>

        <div style={{ flex: 1, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div ref={scrollRef} style={{ flex: 1, padding: 22, display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'auto', maxHeight: 440 }}>
            {messages.map((m, i) =>
              m.role === 'user' ? (
                <div key={i} style={{ alignSelf: 'flex-end', maxWidth: '78%', background: 'var(--navy-800)', color: 'var(--ivory)', padding: '12px 16px', borderRadius: '14px 14px 14px 4px', fontSize: 14.5, lineHeight: 1.7 }}>
                  {m.text}
                </div>
              ) : (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', maxWidth: '92%' }}>
                  <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    <img src={talalMark} style={{ width: 24, height: 24, filter: 'brightness(0) invert(1)' }} alt="" />
                  </span>
                  <div style={{ flex: 1, background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)', borderRadius: '4px 14px 14px 14px', padding: '14px 16px' }}>
                    <div style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--text-body)' }}>{m.text}</div>
                    {m.citation && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, padding: '9px 12px', background: 'var(--gold-50)', borderInlineStart: '2.5px solid var(--gold-600)', borderRadius: 'var(--radius-sm)', fontSize: 12.5, color: 'var(--text-muted)' }}>
                        <BookMarked size={14} strokeWidth={1.8} style={{ flex: 'none', color: 'var(--gold-700)' }} /> المصدر النظامي:{' '}
                        <b style={{ color: 'var(--text-body)', fontWeight: 600 }}>{m.citation}</b>
                      </div>
                    )}
                    {m.lawyer && (
                      <div style={{ marginTop: 14, padding: 14, border: '1px solid var(--border-subtle)', borderTop: '2.5px solid var(--gold-600)', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)' }}>
                        <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.03em', color: 'var(--text-subtle)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                          <UserCheck size={14} strokeWidth={1.8} style={{ color: 'var(--gold-700)' }} /> المحامي المختص المقترح من المكتب
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--navy-100)', color: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, flex: 'none' }}>
                            {initials(m.lawyer.name)}
                          </span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <b style={{ fontSize: 15, color: 'var(--text-strong)' }}>{m.lawyer.name}</b>
                            <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{m.lawyer.specialtyLabel}</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3, color: 'var(--gold-700)', fontSize: 12.5, fontWeight: 600 }}>
                              <Star size={13} strokeWidth={1.8} style={{ fill: 'var(--gold-500)', color: 'var(--gold-500)' }} /> {m.lawyer.rating}
                            </div>
                          </div>
                          <Link
                            to="/login"
                            style={{ height: 40, padding: '0 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--navy-800)', background: 'var(--navy-800)', color: 'var(--ivory)', fontSize: 13.5, fontWeight: 600, flex: 'none', display: 'inline-flex', alignItems: 'center' }}
                          >
                            احجز استشارة
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ),
            )}
            {sending && (
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--navy-800)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <img src={talalMark} style={{ width: 24, height: 24, filter: 'brightness(0) invert(1)' }} alt="" />
                </span>
                <div style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)', borderRadius: '4px 14px 14px 14px', padding: '14px 16px', fontSize: 13.5, color: 'var(--text-muted)' }}>
                  جارِ إعداد الإجابة…
                </div>
              </div>
            )}
            {errorMsg && (
              <div style={{ padding: '10px 13px', background: 'var(--danger-100)', color: 'var(--danger-600)', borderRadius: 'var(--radius-md)', fontSize: 13.5 }}>{errorMsg}</div>
            )}
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '16px 18px', background: 'var(--surface-card)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
              {SUGGESTED_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  disabled={sending}
                  onClick={() => submit(chip)}
                  style={{ padding: '7px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: 'var(--white)', color: 'var(--navy-700)', fontSize: 12.5, fontWeight: 500, cursor: sending ? 'default' : 'pointer' }}
                >
                  {chip}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    submit(input);
                  }
                }}
                placeholder="اكتب سؤالك القانوني هنا…"
                style={{ flex: 1, fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--text-strong)', height: 48, padding: '0 16px', background: 'var(--white)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-inset)', outline: 'none' }}
              />
              <button
                type="button"
                disabled={sending}
                onClick={() => submit(input)}
                style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', border: '1px solid var(--navy-800)', background: 'var(--navy-800)', color: 'var(--ivory)', cursor: sending ? 'default' : 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', opacity: sending ? 0.6 : 1 }}
              >
                <ArrowUp size={20} strokeWidth={1.8} />
              </button>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginTop: 12, fontSize: 12, color: 'var(--text-subtle)', lineHeight: 1.6 }}>
              <Info size={14} strokeWidth={1.8} style={{ flex: 'none', marginTop: 1 }} />
              <span>استشارة أولية تعتمد على الذكاء الاصطناعي وقد تحتوي أخطاء. لا تُغني عن مراجعة محامٍ مرخّص.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
