# مِيزان — نظام تصميم ميزان للاستشارات القانونية
# Mizan — Legal Consulting Design System

A bilingual (Arabic-first, RTL) design system for **ميزان للاستشارات القانونية (Mizan Legal Consulting)** — an AI legal-consulting brand whose
flagship product is **المساعد القانوني الذكي** — an AI legal assistant that answers questions grounded
in Saudi regulations and cites the source article for every answer.

The brand voice is **authoritative, trustworthy, and precise** — the visual language of a serious law
practice, not a playful consumer app. The mark is a **ميزان (scales of justice)**, the colors are
**navy (authority/trust)** and **gold (justice/prestige)** on **warm ivory paper**.

---

## Sources provided
- `uploads/mizan-logo (1).svg` — the scales-of-justice brand mark (copied to `assets/mizan-mark.svg`).
- Brand brief: company = "مساعد قانوني، ميزان للاستشارات القانونية"; type = IBM (Plex) from Google Fonts;
  brand colors `#B8924C` (gold) + `#0F2A4A` (navy).

No codebase, Figma file, or slide deck was attached — foundations below are **derived** from the brief
and mark. Anything inferred is flagged in **Caveats** at the end.

---

## CONTENT FUNDAMENTALS — how copy is written
- **Language:** Arabic first, RTL throughout. English appears only as a secondary lockup line or for
  technical tokens (emails, case IDs). Document `dir="rtl"`, `lang="ar"`.
- **Tone:** formal, respectful, reassuring. The product speaks as a knowledgeable assistant, not a
  buddy. Uses **Modern Standard Arabic (فصحى)**, never dialect.
- **Person:** addresses the user politely in second person ("استشارتك"، "سؤالك"، "كيف يمكنني مساعدتك").
  The assistant refers to itself implicitly ("سأجيبك") — restrained, not chatty.
- **Casing/figures:** Latin headings use Title-ish casing sparingly; numbers, dates (هجري/ميلادي), case
  numbers and amounts are set in **IBM Plex Mono, tabular**. Currency: "ر.س".
- **Citations are mandatory copy.** Every substantive legal answer ends with **المصادر النظامية** —
  named regulation + article (e.g. "نظام العمل — المادة 75") and a short verbatim excerpt.
- **Disclaimers, always.** A standing notice ("لا تُغني عن مراجعة محامٍ مرخّص") sits under the composer
  and in a warning Alert. Trust is the product.
- **Emoji:** never. This is a legal brand. Iconography is line icons only.
- **Examples of voice:**
  - Heading: «العدالة أساس المُلك» · «استشارتك القانونية، موثّقة بالمصدر النظامي.»
  - CTA: «استشارة جديدة» · «ابدأ الآن» · «دخول»
  - Microcopy: «قد يُخطئ المساعد. تحقّق من المعلومات المهمة وراجع محامياً مرخّصاً.»

---

## VISUAL FOUNDATIONS
**Colors.** Two-color brand system on warm neutrals.
- Navy `#0F2A4A` (`--navy-800`) — primary surfaces, headings, primary buttons, sidebar.
- Gold `#B8924C` (`--gold-600`) — accent, the justice motif, focus rings, active indicators, CTAs.
- Ivory `#F7F5F0` (`--ivory`) — page paper (taken from the logo plate). White `#FFF` for cards.
- Full 50→950 navy and 50→900 gold ramps; warm "ink" text scale; semantic success/warning/danger/info.
- Restraint: never more than navy + gold + one neutral in a single composition. No purple/blue gradients.

**Type.** `IBM Plex Sans Arabic` everywhere (300–700); `IBM Plex Mono` for figures/case numbers/code.
Generous leading (body 1.6, relaxed 1.8) because Arabic needs vertical breathing room. Letter-spacing
stays **0 for Arabic**; the caps `eyebrow` spacing applies to Latin only. Display 56 → body 16 → 2xs 11.

**Spacing & layout.** 4px base grid. Container max 1200, content max 720. RTL flex/grid with `gap`.
Fixed app chrome: navy sidebar (288px) inline-end... pinned; composer pinned to bottom.

**Backgrounds.** Flat ivory paper. The only "decoration" is faint concentric gold rings on the navy
login panel (echoing the round mark). No photos, no textures, no noise, no busy gradients — at most a
single subtle navy→navy-900 diagonal on the brand panel.

**Corner radii.** Restrained and crisp: inputs/buttons 8px (`--radius-md`), cards 12px (`--radius-lg`),
composer 16px, pills/avatars full. Nothing bubbly.

**Cards.** White surface, 1px `--border-subtle` hairline, soft `--shadow-sm`. Optional **gold top rule**
(`accent`) for emphasis. Hover lifts 2px and deepens to `--shadow-lg`.

**Shadows.** Soft and **navy-tinted** (`rgba(15,42,74,…)`), never neutral black. xs→xl scale. Inputs use
a faint inset hairline; focus is a 3px **gold glow** (`--shadow-focus`).

**Borders.** 1px hairlines for structure; a 2.5–3px **gold inline-start/​top rule** marks the active or
cited element (sidebar active item, Citation card, Alert, accent Card).

**Motion.** Calm and deliberate — authority = restraint. `--ease-standard` (220ms base). Fades and
short translates only; **no bounce** on UI. The single playful touch is the 3-dot typing indicator
(`mzbounce`). Respect reduced-motion in production.

**Hover/press.** Hover = darker brand shade or soft tint (`--navy-50` / `--gold-50`); press = 1px
`translateY` nudge, no scale. Disabled = 45% opacity.

**Transparency/blur.** Used sparingly — translucent white (`rgba(255,255,255,.07)`) for inset controls
on the navy sidebar (search). No glassmorphism elsewhere.

**Imagery vibe.** Minimal/none. If imagery is ever added it should be warm-toned, calm, and editorial —
never stocky or cool. The brand leans on typography + the mark, not photography.

---

## ICONOGRAPHY
- **System:** [Lucide](https://lucide.dev) — thin, consistent 1.5–2px stroke line icons. It matches the
  restrained, professional tone and pairs cleanly with IBM Plex. Loaded from CDN
  (`unpkg.com/lucide`) and wrapped by `ui_kits/legal-assistant/KitIcon.jsx`.
- **Style rules:** line (outline) only, `currentColor`, ~16–20px in UI. Gold icons sit in gold-100
  tiles for feature/suggestion chips; navy/ink icons elsewhere.
- **Common glyphs:** `scale`, `briefcase`, `file-signature`, `book-marked`, `shield-check`,
  `message-square-text`, `paperclip`, `arrow-up`, `search`, `settings`, `download`, `share-2`.
- **Brand mark:** `assets/mizan-mark.svg` (scales of justice) — used as logo and assistant avatar.
  It is the only bespoke SVG; do **not** hand-draw new icons — use Lucide.
- **Emoji / unicode icons:** never used.
- ⚠️ Lucide is a **substitution** (no icon set was supplied). Swap if the firm has a house set.

---

## INDEX — what's in this system
**Root**
- `styles.css` — single entry point (consumers link this); `@import`s the token + base files.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`,
  `motion.css`, `base.css` (RTL resets).
- `assets/mizan-mark.svg` — brand mark.
- `SKILL.md` — Agent-Skills entry point.

**Foundation cards** (`guidelines/`, shown in the Design System tab)
- Colors: brand, navy scale, gold scale, neutrals, status.
- Type: headings, body & labels, mono figures, weights.
- Spacing: scale, radius, elevation.
- Brand: logo lockup, logo on navy, color pairings.

**Components** (`window.MizanTalalLawDesignSystem_c3bb63`)
- `actions/` — **Button**, **IconButton**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Switch**
- `data/` — **Badge**, **Avatar**, **Card**, **Citation** *(signature legal component)*
- `feedback/` — **Alert**
- `navigation/` — **Tabs**
- `chat/` — **MessageBubble**

**UI kits**
- `ui_kits/legal-assistant/` — full interactive RTL chat product (login → suggestions → cited answers).

---

## CAVEATS / ASKS
- **Fonts** load from the Google/IBM Plex CDN (woff2). No font binaries were supplied — confirm this is
  acceptable or send self-host files.
- **Icons** use Lucide as a substitution; no brand icon set was provided.
- **Colors beyond the two brand hues** (the full ramps, semantic status, neutrals) were derived to be
  harmonious — review and adjust to taste.
- **Product scope** (the legal-assistant chat) is an informed interpretation of "مساعد قانوني"; there is
  no source UI. Tell me the real screens/flows and I'll match them exactly.
- **All sample legal content is illustrative** and not verified legal text.

**👉 Tell me: (1) are the navy/gold ramps right, (2) keep Lucide or swap, (3) self-host fonts or CDN,
(4) what real product screens should the UI kit mirror?** I'll iterate to pixel-perfect.
