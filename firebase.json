/* @ds-bundle: {"format":3,"namespace":"MizanTalalLawDesignSystem_c3bb63","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"MessageBubble","sourcePath":"components/chat/MessageBubble.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Citation","sourcePath":"components/data/Citation.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"e868523bf18a","components/actions/IconButton.jsx":"184b77408020","components/chat/MessageBubble.jsx":"42ee7fa79694","components/data/Avatar.jsx":"1dbb22517d0b","components/data/Badge.jsx":"076cbd5a2d45","components/data/Card.jsx":"13a92d744e2a","components/data/Citation.jsx":"95322b35ffe2","components/feedback/Alert.jsx":"221e30435c4b","components/forms/Checkbox.jsx":"4af3a32736e7","components/forms/Input.jsx":"740b1d7131f1","components/forms/Select.jsx":"720dd87d8767","components/forms/Switch.jsx":"a69ab46df0bd","components/forms/Textarea.jsx":"bbe175b9c436","components/navigation/Tabs.jsx":"299c728c9ba1","ui_kits/legal-assistant/App.jsx":"99ad0ed22e61","ui_kits/legal-assistant/Composer.jsx":"e21f80f98e73","ui_kits/legal-assistant/KitIcon.jsx":"e7f48440cc37","ui_kits/legal-assistant/Login.jsx":"9434b06eb651","ui_kits/legal-assistant/Sidebar.jsx":"5180ce6df35d","ui_kits/legal-assistant/Thread.jsx":"9f5023601567","ui_kits/legal-assistant/Welcome.jsx":"a90beb25e070","ui_kits/legal-assistant/kitdata.js":"4035e8eeeed8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MizanTalalLawDesignSystem_c3bb63 = window.MizanTalalLawDesignSystem_c3bb63 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action element for Mizan Legal Consulting.
 * RTL-first. Variants map to brand navy (primary), gold (accent),
 * outline, ghost, and danger.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconStart = null,
  iconEnd = null,
  type = 'button',
  onClick,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 34,
      fontSize: 14,
      gap: 6
    },
    md: {
      padding: '0 20px',
      height: 42,
      fontSize: 15,
      gap: 8
    },
    lg: {
      padding: '0 28px',
      height: 52,
      fontSize: 17,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--navy-800)',
      color: 'var(--ivory)',
      border: '1px solid var(--navy-800)'
    },
    accent: {
      background: 'var(--gold-600)',
      color: 'var(--navy-900)',
      border: '1px solid var(--gold-600)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--navy-800)',
      border: '1px solid var(--navy-300)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--navy-800)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--danger-600)',
      color: '#fff',
      border: '1px solid var(--danger-600)'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverBg = {
    primary: 'var(--navy-900)',
    accent: 'var(--gold-700)',
    outline: 'var(--navy-50)',
    ghost: 'var(--navy-50)',
    danger: '#9a322e'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-button)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-color), transform var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      ...v,
      ...(hover && !disabled ? {
        background: hoverBg,
        borderColor: variant === 'outline' ? 'var(--navy-400)' : hoverBg
      } : null),
      ...style
    }
  }, rest), iconStart && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconStart), children, iconEnd && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconEnd));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** IconButton — square button for a single icon action (toolbar, composer). */
function IconButton({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--navy-700)',
      hover: 'var(--navy-50)'
    },
    solid: {
      background: 'var(--navy-800)',
      color: 'var(--ivory)',
      hover: 'var(--navy-900)'
    },
    accent: {
      background: 'var(--gold-100)',
      color: 'var(--gold-700)',
      hover: 'var(--gold-200)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--navy-700)',
      hover: 'var(--navy-50)',
      border: '1px solid var(--navy-300)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      border: v.border || '1px solid transparent',
      background: hover && !disabled ? v.hover : v.background,
      color: v.color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-color)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/chat/MessageBubble.jsx
try { (() => {
/**
 * MessageBubble — a single turn in the Mizan legal-assistant chat.
 * role="user" aligns to inline-start with navy fill; role="assistant"
 * aligns to inline-end with a paper surface and the Mizan mark.
 */
function MessageBubble({
  role = 'assistant',
  children,
  avatar,
  time,
  style = {}
}) {
  const isUser = role === 'user';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignItems: 'flex-start',
      ...style
    }
  }, avatar && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      marginTop: 2
    }
  }, avatar), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isUser ? 'flex-end' : 'flex-start',
      maxWidth: '78%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderRadius: isUser ? 'var(--radius-lg) var(--radius-lg) var(--radius-lg) var(--radius-xs)' : 'var(--radius-lg) var(--radius-lg) var(--radius-xs) var(--radius-lg)',
      background: isUser ? 'var(--navy-800)' : 'var(--surface-card)',
      color: isUser ? 'var(--ivory)' : 'var(--text-body)',
      border: isUser ? 'none' : '1px solid var(--border-subtle)',
      boxShadow: isUser ? 'none' : 'var(--shadow-xs)',
      fontSize: 15,
      lineHeight: 1.7
    }
  }, children), time && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-subtle)',
      marginTop: 5,
      fontFamily: 'var(--font-mono)'
    }
  }, time)));
}
Object.assign(__ds_scope, { MessageBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/MessageBubble.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
/** Avatar — circular initials or image, with optional ring. */
function Avatar({
  name = '',
  src,
  size = 40,
  tone = 'brand',
  ring = false,
  style = {}
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('');
  const tones = {
    brand: ['var(--navy-100)', 'var(--navy-800)'],
    accent: ['var(--gold-100)', 'var(--gold-800)'],
    neutral: ['var(--ink-100)', 'var(--ink-700)']
  };
  const [bg, fg] = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: src ? 'transparent' : bg,
      color: fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontSize: size * 0.4,
      fontWeight: 600,
      boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 4px var(--gold-500)' : 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Badge — small status/label pill. */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['var(--ink-100)', 'var(--ink-700)'],
      solid: ['var(--ink-700)', '#fff']
    },
    brand: {
      soft: ['var(--navy-50)', 'var(--navy-700)'],
      solid: ['var(--navy-800)', 'var(--ivory)']
    },
    accent: {
      soft: ['var(--gold-100)', 'var(--gold-800)'],
      solid: ['var(--gold-600)', 'var(--navy-900)']
    },
    success: {
      soft: ['var(--success-100)', 'var(--success-600)'],
      solid: ['var(--success-600)', '#fff']
    },
    warning: {
      soft: ['var(--warning-100)', 'var(--warning-600)'],
      solid: ['var(--warning-600)', '#fff']
    },
    danger: {
      soft: ['var(--danger-100)', 'var(--danger-600)'],
      solid: ['var(--danger-600)', '#fff']
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      fontSize: 12.5,
      fontWeight: 600,
      lineHeight: 1.5,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — surface container with optional header accent. */
function Card({
  children,
  padding = 'var(--pad-card)',
  accent = false,
  hoverable = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-subtle)',
      borderTop: accent ? '3px solid var(--gold-600)' : '1px solid var(--border-subtle)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'var(--transition-base)',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Citation.jsx
try { (() => {
/**
 * Citation — legal source reference shown beneath an assistant answer.
 * Displays the regulation/article and an optional excerpt. The signature
 * legal-domain component of the Mizan assistant.
 */
function Citation({
  source,
  article,
  excerpt,
  index,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      width: '100%',
      textAlign: 'start',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: hover ? 'var(--gold-50)' : 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderInlineStart: '3px solid var(--gold-600)',
      cursor: 'pointer',
      transition: 'var(--transition-color)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--navy-800)',
      color: 'var(--ivory)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--navy-800)'
    }
  }, source, article ? ` — ${article}` : ''), excerpt && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, excerpt)));
}
Object.assign(__ds_scope, { Citation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Citation.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/** Alert — inline banner for status messages. */
function Alert({
  tone = 'info',
  title,
  children,
  onClose,
  icon = null,
  style = {}
}) {
  const tones = {
    info: ['var(--info-100)', 'var(--info-600)', 'var(--navy-800)'],
    success: ['var(--success-100)', 'var(--success-600)', 'var(--ink-800)'],
    warning: ['var(--warning-100)', 'var(--warning-600)', 'var(--ink-800)'],
    danger: ['var(--danger-100)', 'var(--danger-600)', 'var(--ink-800)']
  };
  const [bg, accent, text] = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: bg,
      borderInlineStart: `3px solid ${accent}`,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      flex: 'none',
      display: 'inline-flex',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: text,
      marginBottom: children ? 4 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642",
    style: {
      flex: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox — square check control with label, RTL. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked ? 'var(--navy-800)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--navy-800)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-color)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.5L9.5 3.5",
    stroke: "var(--ivory)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — single-line text field, RTL-first. */
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  iconStart = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--gold-600)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 44,
      padding: '0 14px',
      background: disabled ? 'var(--paper-2)' : 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
      transition: 'var(--transition-color), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, iconStart && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-subtle)'
    }
  }, iconStart), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — native dropdown styled to the Mizan system, RTL. */
function Select({
  label,
  hint,
  error,
  value,
  onChange,
  options = [],
  placeholder,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--gold-600)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 44,
      padding: '0 14px',
      paddingLeft: 38,
      background: disabled ? 'var(--paper-2)' : 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: value ? 'var(--text-strong)' : 'var(--text-subtle)',
      appearance: 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-color), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)',
      fontSize: 12
    }
  }, "\u25BC")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Switch — on/off toggle, gold when on. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--gold-600)' : 'var(--ink-300)',
      padding: 3,
      display: 'inline-flex',
      justifyContent: checked ? 'flex-start' : 'flex-end',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'var(--transition-base)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line input for legal questions / notes. */
function Textarea({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--gold-600)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      resize: 'vertical',
      padding: '12px 14px',
      background: disabled ? 'var(--paper-2)' : 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-inset)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-strong)',
      outline: 'none',
      transition: 'var(--transition-color), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — underline tab bar, RTL. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const key = t.value ?? t;
    const label = t.label ?? t;
    const active = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(key),
      style: {
        position: 'relative',
        padding: '12px 16px',
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: active ? 600 : 500,
        color: active ? 'var(--navy-800)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'var(--transition-color)'
      }
    }, label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginInlineStart: 6,
        fontSize: 12,
        fontFamily: 'var(--font-mono)',
        color: active ? 'var(--gold-700)' : 'var(--text-subtle)'
      }
    }, t.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        insetInline: 0,
        bottom: -1,
        height: 2.5,
        background: active ? 'var(--gold-600)' : 'transparent',
        borderRadius: '2px 2px 0 0',
        transition: 'var(--transition-color)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/legal-assistant/App.jsx
try { (() => {
// Orchestrator: login → app (welcome ↔ thread), with fake send flow.
function App() {
  const {
    Login,
    Sidebar,
    Welcome,
    Composer,
    Thread
  } = window;
  const [authed, setAuthed] = React.useState(false);
  const [active, setActive] = React.useState('c1');
  const [draft, setDraft] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const data = window.MizanKitData;
  const conv = data.conversations.find(c => c.id === active) || data.conversations[0];
  const now = () => new Date().toLocaleTimeString('ar-SA', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const send = text => {
    const body = (text != null ? text : draft).trim();
    if (!body) return;
    setMessages(m => [...m, {
      role: 'user',
      text: body,
      time: now()
    }]);
    setDraft('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, {
        role: 'assistant',
        text: data.reply.text,
        citations: data.reply.citations,
        time: now()
      }]);
    }, 1400);
  };
  const newConsult = () => {
    setMessages([]);
    setDraft('');
  };
  const selectConv = id => {
    setActive(id);
    setMessages([]);
  };
  if (!authed) return /*#__PURE__*/React.createElement(Login, {
    onEnter: () => setAuthed(true)
  });
  const hasThread = messages.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onSelect: selectConv,
    onNew: newConsult
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, hasThread ? /*#__PURE__*/React.createElement(Thread, {
    conv: conv,
    messages: messages,
    typing: typing
  }) : /*#__PURE__*/React.createElement(Welcome, {
    onPick: t => send(t)
  }), /*#__PURE__*/React.createElement(Composer, {
    value: draft,
    onChange: setDraft,
    onSend: () => send()
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/legal-assistant/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/legal-assistant/Composer.jsx
try { (() => {
// Message composer pinned to the bottom of the thread.
function Composer({
  value,
  onChange,
  onSend
}) {
  const {
    IconButton
  } = window.MizanTalalLawDesignSystem_c3bb63;
  const KitIcon = window.KitIcon;
  const send = () => {
    if (value.trim()) onSend();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px 20px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      padding: 8,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0625\u0631\u0641\u0627\u0642 \u0645\u0633\u062A\u0646\u062F",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: "paperclip",
    s: 19
  })), /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: e => onChange(e.target.value),
    rows: 1,
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    placeholder: "\u0627\u0643\u062A\u0628 \u0633\u0624\u0627\u0644\u0643 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u2026",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      resize: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-strong)',
      padding: '9px 4px',
      maxHeight: 140
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    "aria-label": "\u0625\u0631\u0633\u0627\u0644",
    style: {
      width: 42,
      height: 42,
      flex: 'none',
      borderRadius: 'var(--radius-lg)',
      border: 'none',
      background: value.trim() ? 'var(--navy-800)' : 'var(--ink-200)',
      color: value.trim() ? 'var(--ivory)' : 'var(--text-subtle)',
      cursor: value.trim() ? 'pointer' : 'default',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-color)'
    }
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: "arrow-up",
    s: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-subtle)',
      marginTop: 10
    }
  }, "\u0642\u062F \u064A\u064F\u062E\u0637\u0626 \u0627\u0644\u0645\u0633\u0627\u0639\u062F. \u062A\u062D\u0642\u0651\u0642 \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0647\u0645\u0629 \u0648\u0631\u0627\u062C\u0639 \u0645\u062D\u0627\u0645\u064A\u0627\u064B \u0645\u0631\u062E\u0651\u0635\u0627\u064B.")));
}
window.Composer = Composer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/legal-assistant/Composer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/legal-assistant/KitIcon.jsx
try { (() => {
// Shared icon helper for the kit (Lucide).
window.KitIcon = function KitIcon({
  n,
  s = 18,
  color
}) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    const e = document.createElement('i');
    e.setAttribute('data-lucide', n);
    ref.current.appendChild(e);
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        width: s,
        height: s,
        stroke: color || 'currentColor'
      }
    });
  });
  return React.createElement('span', {
    ref,
    style: {
      display: 'inline-flex',
      color
    }
  });
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/legal-assistant/KitIcon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/legal-assistant/Login.jsx
try { (() => {
// Login / welcome gate for the Mizan legal assistant.
function Login({
  onEnter
}) {
  const {
    Button,
    Input
  } = window.MizanTalalLawDesignSystem_c3bb63;
  const KitIcon = window.KitIcon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 44%',
      background: 'linear-gradient(155deg, var(--navy-800) 0%, var(--navy-900) 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 48,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--ivory)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mizan-mark.svg",
    alt: "",
    style: {
      width: 52,
      height: 52
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ivory)',
      fontWeight: 700,
      fontSize: 19
    }
  }, "\u0645\u064A\u0632\u0627\u0646 \u0644\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold-500)',
      fontSize: 13,
      fontWeight: 500
    }
  }, "\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0627\u0644\u0630\u0643\u064A"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ivory)',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: 1.3,
      marginBottom: 16
    }
  }, "\u0627\u0633\u062A\u0634\u0627\u0631\u062A\u0643 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629\u060C", /*#__PURE__*/React.createElement("br", null), "\u0645\u0648\u062B\u0651\u0642\u0629 \u0628\u0627\u0644\u0645\u0635\u062F\u0631 \u0627\u0644\u0646\u0638\u0627\u0645\u064A."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--navy-200)',
      fontSize: 16,
      lineHeight: 1.8,
      maxWidth: 380
    }
  }, "\u0625\u062C\u0627\u0628\u0627\u062A \u062F\u0642\u064A\u0642\u0629 \u0645\u0633\u062A\u0646\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u0644\u0648\u0627\u0626\u062D \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u060C \u0645\u0639 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0627\u062F\u0629 \u0648\u0627\u0644\u0645\u0635\u062F\u0631 \u0644\u0643\u0644 \u0625\u062C\u0627\u0628\u0629.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      color: 'var(--navy-200)',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: "shield-check",
    s: 16,
    color: "var(--gold-500)"
  }), " \u0633\u0631\u0651\u064A\u0629 \u062A\u0627\u0645\u0629"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: "book-marked",
    s: 16,
    color: "var(--gold-500)"
  }), " \u0645\u0635\u0627\u062F\u0631 \u0645\u0648\u062B\u0651\u0642\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -80,
      bottom: -80,
      width: 280,
      height: 280,
      borderRadius: '50%',
      border: '1px solid rgba(184,146,76,0.18)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -40,
      bottom: -40,
      width: 200,
      height: 200,
      borderRadius: '50%',
      border: '1px solid rgba(184,146,76,0.12)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 380,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "\u0627\u0628\u062F\u0623 \u0627\u0633\u062A\u0634\u0627\u0631\u062A\u0643 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629 \u0627\u0644\u0622\u0646")), /*#__PURE__*/React.createElement(Input, {
    label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    placeholder: "name@firm.sa"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg",
    onClick: onEnter
  }, "\u062F\u062E\u0648\u0644"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "\u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onEnter();
    },
    style: {
      color: 'var(--navy-600)',
      fontWeight: 600
    }
  }, "\u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u0627\u064B")))));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/legal-assistant/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/legal-assistant/Sidebar.jsx
try { (() => {
// Navy sidebar — brand, new consultation, conversation list, user.
function Sidebar({
  active,
  onSelect,
  onNew
}) {
  const {
    Button,
    Badge,
    Avatar
  } = window.MizanTalalLawDesignSystem_c3bb63;
  const KitIcon = window.KitIcon;
  const convs = window.MizanKitData.conversations;
  const tagTone = {
    'عمالية': 'accent',
    'تجارية': 'brand',
    'شركات': 'neutral',
    'أحوال': 'neutral'
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 288,
      flex: 'none',
      height: '100%',
      background: 'var(--navy-800)',
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--ivory)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--ivory)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mizan-mark.svg",
    alt: "",
    style: {
      width: 38,
      height: 38
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "\u0645\u064A\u0632\u0627\u0646 \u0644\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--gold-500)'
    }
  }, "\u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0627\u0644\u0630\u0643\u064A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 14px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    block: true,
    iconStart: /*#__PURE__*/React.createElement(KitIcon, {
      n: "plus",
      s: 18
    }),
    onClick: onNew
  }, "\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u062C\u062F\u064A\u062F\u0629")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 38,
      padding: '0 12px',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.07)',
      color: 'var(--navy-200)'
    }
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: "search",
    s: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5
    }
  }, "\u0627\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 22px',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: 'var(--navy-300)'
    }
  }, "\u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 10px'
    }
  }, convs.map(c => {
    const on = c.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => onSelect(c.id),
      style: {
        width: '100%',
        textAlign: 'start',
        border: 'none',
        cursor: 'pointer',
        background: on ? 'rgba(255,255,255,0.10)' : 'transparent',
        borderRadius: 'var(--radius-md)',
        padding: '11px 12px',
        marginBottom: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        transition: 'background 120ms',
        borderInlineEnd: on ? '2.5px solid var(--gold-600)' : '2.5px solid transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--ivory)',
        fontSize: 14,
        fontWeight: on ? 600 : 500
      }
    }, /*#__PURE__*/React.createElement(KitIcon, {
      n: "message-square-text",
      s: 15,
      color: "var(--navy-300)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, c.title)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingInlineStart: 23
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: tagTone[c.tag] || 'neutral',
      variant: "soft",
      style: {
        fontSize: 11
      }
    }, c.tag), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: 'var(--navy-300)'
      }
    }, c.time)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u062D\u0631\u0628\u064A",
    size: 38,
    tone: "accent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "\u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u062D\u0631\u0628\u064A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--navy-300)'
    }
  }, "\u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u062A\u0642\u062F\u0651\u0645\u0629")), /*#__PURE__*/React.createElement(KitIcon, {
    n: "settings",
    s: 18,
    color: "var(--navy-300)"
  })));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/legal-assistant/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/legal-assistant/Thread.jsx
try { (() => {
// Thread header + message list for the active conversation.
function ThreadHeader({
  title,
  tag
}) {
  const {
    Badge,
    IconButton
  } = window.MizanTalalLawDesignSystem_c3bb63;
  const KitIcon = window.KitIcon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 24px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), tag && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "soft"
  }, tag)), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u062A\u0635\u062F\u064A\u0631",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: "download",
    s: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0645\u0634\u0627\u0631\u0643\u0629",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: "share-2",
    s: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u0627\u0644\u0645\u0632\u064A\u062F",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: "more-horizontal",
    s: 18
  })));
}
function Typing() {
  const {
    Avatar
  } = window.MizanTalalLawDesignSystem_c3bb63;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0645\u0650\u064A\u0632\u0627\u0646",
    tone: "accent",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      padding: '16px 18px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--gold-500)',
      animation: `mzbounce 1.2s ${i * 0.15}s infinite ease-in-out`
    }
  }))));
}
function Thread({
  conv,
  messages,
  typing
}) {
  const {
    MessageBubble,
    Avatar,
    Citation
  } = window.MizanTalalLawDesignSystem_c3bb63;
  const endRef = React.useRef();
  React.useEffect(() => {
    if (endRef.current) endRef.current.scrollTop = endRef.current.scrollHeight;
  }, [messages.length, typing]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(ThreadHeader, {
    title: conv.title,
    tag: conv.tag
  }), /*#__PURE__*/React.createElement("div", {
    ref: endRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '28px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement(MessageBubble, {
    key: i,
    role: m.role,
    time: m.time,
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      name: m.role === 'user' ? 'عبدالله الحربي' : 'مِيزان',
      tone: m.role === 'user' ? 'brand' : 'accent',
      size: 34
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: m.citations ? 12 : 0
    }
  }, m.text), m.citations && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "\u0627\u0644\u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u0646\u0638\u0627\u0645\u064A\u0629"), m.citations.map((c, j) => /*#__PURE__*/React.createElement(Citation, {
    key: j,
    index: j + 1,
    source: c.source,
    article: c.article,
    excerpt: c.excerpt
  }))))), typing && /*#__PURE__*/React.createElement(Typing, null))));
}
window.Thread = Thread;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/legal-assistant/Thread.jsx", error: String((e && e.message) || e) }); }

// ui_kits/legal-assistant/Welcome.jsx
try { (() => {
// Empty / welcome state with suggested prompts.
function Welcome({
  onPick
}) {
  const KitIcon = window.KitIcon;
  const items = window.MizanKitData.suggestions;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mizan-mark.svg",
    alt: "",
    style: {
      width: 64,
      height: 64
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginBottom: 8
    }
  }, "\u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u064A \u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0627\u0644\u064A\u0648\u0645\u061F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      marginBottom: 32,
      textAlign: 'center',
      maxWidth: 460,
      lineHeight: 1.7
    }
  }, "\u0627\u0637\u0631\u062D \u0633\u0624\u0627\u0644\u0643 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0648\u0633\u0623\u062C\u064A\u0628\u0643 \u0627\u0633\u062A\u0646\u0627\u062F\u0627\u064B \u0625\u0644\u0649 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0627\u0644\u0644\u0648\u0627\u0626\u062D \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u060C \u0645\u0639 \u0630\u0643\u0631 \u0627\u0644\u0645\u0635\u062F\u0631."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      width: '100%',
      maxWidth: 620
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onPick(it.body),
    style: {
      textAlign: 'start',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      display: 'flex',
      gap: 13,
      alignItems: 'flex-start',
      transition: 'var(--transition-base)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.borderColor = 'var(--gold-400)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--gold-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(KitIcon, {
    n: it.icon,
    s: 19,
    color: "var(--gold-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, it.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, it.body))))));
}
window.Welcome = Welcome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/legal-assistant/Welcome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/legal-assistant/kitdata.js
try { (() => {
// Sample content for the Mizan legal-assistant UI kit (fake data).
window.MizanKitData = {
  suggestions: [{
    icon: 'briefcase',
    title: 'إنهاء عقد عمل',
    body: 'ما حقوقي عند فصلي تعسفياً من العمل؟'
  }, {
    icon: 'file-signature',
    title: 'صياغة عقد',
    body: 'أعدّ لي عقد إيجار تجاري وفق الأنظمة السعودية.'
  }, {
    icon: 'scale',
    title: 'مطالبة مالية',
    body: 'كيف أرفع دعوى لاسترداد مبلغ مالي؟'
  }, {
    icon: 'home',
    title: 'أحوال شخصية',
    body: 'ما إجراءات قسمة التركة بين الورثة؟'
  }],
  conversations: [{
    id: 'c1',
    title: 'مدة الإشعار في الاستقالة',
    tag: 'عمالية',
    time: 'اليوم'
  }, {
    id: 'c2',
    title: 'بنود عقد إيجار تجاري',
    tag: 'تجارية',
    time: 'أمس'
  }, {
    id: 'c3',
    title: 'حقوق نهاية الخدمة',
    tag: 'عمالية',
    time: 'أمس'
  }, {
    id: 'c4',
    title: 'تأسيس شركة ذات مسؤولية',
    tag: 'شركات',
    time: '٢٨ يونيو'
  }, {
    id: 'c5',
    title: 'قسمة التركة',
    tag: 'أحوال',
    time: '٢٥ يونيو'
  }],
  // Canned assistant reply used when the user sends a message.
  reply: {
    text: 'وفقاً لنظام العمل السعودي، إذا كان عقد العمل غير محدد المدة فيحق لأي من الطرفين إنهاؤه بشرط الإشعار الكتابي قبل (60) يوماً على الأقل. وفي حال الإخلال بمدة الإشعار يستحق الطرف المتضرر تعويضاً يعادل أجر مدة الإشعار.',
    citations: [{
      source: 'نظام العمل',
      article: 'المادة 75',
      excerpt: 'إذا كان العقد غير محدد المدة جاز لأي من طرفيه إنهاؤه بناءً على سبب مشروع يجب بيانه بموجب إشعار كتابي.'
    }, {
      source: 'نظام العمل',
      article: 'المادة 76',
      excerpt: 'إذا لم يُراعِ مَن أنهى العقد مدة الإشعار التزم بأن يدفع للطرف الآخر تعويضاً يعادل أجر مدة الإشعار.'
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/legal-assistant/kitdata.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MessageBubble = __ds_scope.MessageBubble;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Citation = __ds_scope.Citation;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
