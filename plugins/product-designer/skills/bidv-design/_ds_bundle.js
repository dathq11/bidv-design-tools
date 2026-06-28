/* @ds-bundle: {"format":3,"namespace":"BIDVBackOfficeDesignSystem_478bc4","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/PageHeader.jsx"},{"name":"PageHeader","sourcePath":"components/navigation/PageHeader.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"cdfe232b50ac","components/core/Badge.jsx":"11ac900b7dc3","components/core/Button.jsx":"40c0af2b473b","components/core/Card.jsx":"92c016715bf9","components/core/Icon.jsx":"d4104b3ef640","components/core/IconButton.jsx":"57aa32a49a13","components/core/Tag.jsx":"76f49d19a1b4","components/data/DataTable.jsx":"a27f075aef87","components/feedback/Dialog.jsx":"8d930f4d972b","components/feedback/Toast.jsx":"63d02c219f76","components/feedback/Tooltip.jsx":"e5eb583a1afc","components/forms/Checkbox.jsx":"2d0e4decf645","components/forms/Radio.jsx":"ea84669c18ab","components/forms/Select.jsx":"6d06bd734ab1","components/forms/Switch.jsx":"32865b49cb65","components/forms/TextField.jsx":"6d75c9532b9e","components/navigation/PageHeader.jsx":"51d70f8b8bf8","components/navigation/Pagination.jsx":"aef8fa56bcb4","components/navigation/Sidebar.jsx":"e4d3d7bb6280","components/navigation/Tabs.jsx":"09e3005a51ec","components/navigation/TopNav.jsx":"ee8136997f07","ui_kits/back-office/App.jsx":"a359406047c5","ui_kits/back-office/Dashboard.jsx":"0354b6efd972","ui_kits/back-office/Login.jsx":"f77ecb1a8604","ui_kits/back-office/Transactions.jsx":"862d1851711b","ui_kits/back-office/data.js":"25ae145f3542","ui_kits/back-office/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BIDVBackOfficeDesignSystem_478bc4 = window.BIDVBackOfficeDesignSystem_478bc4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48
};
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (!parts[0]) return '';
  // Vietnamese names: take last word + first word's first letters
  const a = parts[parts.length - 1][0] || '';
  const b = parts.length > 1 ? parts[0][0] : '';
  return (a + b).toUpperCase();
}

// Deterministic teal/neutral tint from the name
const TINTS = [['var(--primary-100)', 'var(--primary-700)'], ['var(--blue-100)', 'var(--blue-600)'], ['var(--green-100)', 'var(--green-600)'], ['var(--secondary-100)', 'var(--secondary-700)'], ['var(--neutral-100)', 'var(--neutral-700)']];

/**
 * Avatar — user/entity identity. Image, initials fallback, optional presence dot.
 */
function Avatar({
  name = '',
  src,
  size = 'md',
  presence,
  square = false,
  style = {}
}) {
  const px = SIZES[size] || size || 40;
  const tint = TINTS[(name.charCodeAt(0) || 0) % TINTS.length];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: square ? 'var(--radius-8)' : '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'var(--gray-100)' : tint[0],
      color: tint[1],
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: Math.round(px * 0.38),
      lineHeight: 1,
      userSelect: 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name)), presence && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: Math.max(8, px * 0.26),
      height: Math.max(8, px * 0.26),
      borderRadius: '50%',
      background: presence === 'online' ? 'var(--green-500)' : presence === 'busy' ? 'var(--red-500)' : 'var(--gray-400)',
      border: '2px solid var(--surface-high)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container for grouped content (panels, stat tiles, list sections).
 */
function Card({
  children,
  padding = 16,
  elevated = false,
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: 'var(--surface-high)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: elevated ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-md)',
        borderColor: 'var(--primary-200)',
        cursor: 'pointer'
      } : null),
      ...style
    }
  }, rest), children);
}

/** Optional card header row with title + actions. */
function CardHeader({
  title,
  subtitle,
  actions,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.15px',
      color: 'var(--text-default)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-low)',
      marginTop: 2
    }
  }, subtitle)), actions);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon — thin wrapper around the Iconify <iconify-icon> web component,
 * pinned to Microsoft's Fluent UI System Icons set (`fluent:`), which is
 * the icon library BIDV Back Office is built on.
 *
 * Requires the Iconify script to be present on the page:
 *   <script src="https://cdn.jsdelivr.net/npm/iconify-icon@2/dist/iconify-icon.min.js"></script>
 *
 * Pass either a short name from the curated map below (e.g. "chevron-down")
 * or a full Iconify id (e.g. "fluent:edit-24-regular").
 */

const ICONS = {
  'chevron-down': 'fluent:chevron-down-24-regular',
  'chevron-up': 'fluent:chevron-up-24-regular',
  'chevron-right': 'fluent:chevron-right-24-regular',
  'chevron-left': 'fluent:chevron-left-24-regular',
  dismiss: 'fluent:dismiss-24-regular',
  'dismiss-circle': 'fluent:dismiss-circle-24-regular',
  delete: 'fluent:delete-24-regular',
  checkmark: 'fluent:checkmark-24-regular',
  'checkmark-circle': 'fluent:checkmark-circle-24-filled',
  edit: 'fluent:edit-24-regular',
  save: 'fluent:save-24-regular',
  add: 'fluent:add-24-regular',
  download: 'fluent:arrow-download-24-regular',
  upload: 'fluent:arrow-upload-24-regular',
  filter: 'fluent:filter-24-regular',
  search: 'fluent:search-24-regular',
  info: 'fluent:info-24-regular',
  warning: 'fluent:warning-24-regular',
  error: 'fluent:error-circle-24-regular',
  calendar: 'fluent:calendar-ltr-24-regular',
  history: 'fluent:history-24-regular',
  person: 'fluent:person-24-regular',
  people: 'fluent:people-24-regular',
  options: 'fluent:options-24-regular',
  'more-horizontal': 'fluent:more-horizontal-24-regular',
  'more-vertical': 'fluent:more-vertical-24-regular',
  settings: 'fluent:settings-24-regular',
  home: 'fluent:home-24-regular',
  document: 'fluent:document-24-regular',
  'money': 'fluent:money-24-regular',
  'wallet': 'fluent:wallet-24-regular',
  'building-bank': 'fluent:building-bank-24-regular',
  'arrow-swap': 'fluent:arrow-swap-24-regular',
  'data-bar': 'fluent:data-histogram-24-regular',
  'sign-out': 'fluent:sign-out-24-regular',
  alert: 'fluent:alert-24-regular',
  grid: 'fluent:grid-24-regular',
  copy: 'fluent:copy-24-regular',
  eye: 'fluent:eye-24-regular',
  print: 'fluent:print-24-regular'
};
function Icon({
  name,
  size = 20,
  color,
  className = '',
  style = {},
  ...rest
}) {
  const icon = ICONS[name] || name;
  return React.createElement('iconify-icon', {
    icon,
    width: size,
    height: size,
    className,
    style: {
      color,
      display: 'inline-flex',
      flex: 'none',
      lineHeight: 0,
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--text-default)',
    dot: 'var(--gray-500)'
  },
  primary: {
    bg: 'var(--primary-50)',
    fg: 'var(--primary-700)',
    dot: 'var(--primary-500)'
  },
  positive: {
    bg: 'var(--green-50)',
    fg: 'var(--green-600)',
    dot: 'var(--green-500)'
  },
  negative: {
    bg: 'var(--red-50)',
    fg: 'var(--red-600)',
    dot: 'var(--red-500)'
  },
  notice: {
    bg: 'var(--orange-50)',
    fg: 'var(--orange-600)',
    dot: 'var(--orange-500)'
  },
  informative: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-600)',
    dot: 'var(--blue-500)'
  }
};
const SOLID = {
  neutral: 'var(--gray-500)',
  primary: 'var(--primary-600)',
  positive: 'var(--green-500)',
  negative: 'var(--red-500)',
  notice: 'var(--orange-500)',
  informative: 'var(--blue-500)'
};

/**
 * Badge — status pill for transaction/account states. Tones map to the
 * semantic color system; supports a leading dot or icon, subtle or solid fill.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'subtle',
  dot = false,
  icon,
  size = 'M',
  style = {}
}) {
  const t = TONES[tone] || TONES.neutral;
  const solid = variant === 'solid';
  const h = size === 'S' ? 18 : 22;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: h,
      padding: `0 ${size === 'S' ? 6 : 8}px`,
      borderRadius: 'var(--radius-full)',
      background: solid ? SOLID[tone] : t.bg,
      color: solid ? '#fff' : t.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'S' ? 11 : 12,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? '#fff' : t.dot,
      flex: 'none'
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'S' ? 12 : 14
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  L: {
    height: 40,
    padX: 16,
    font: 14,
    gap: 8,
    icon: 20
  },
  M: {
    height: 32,
    padX: 12,
    font: 14,
    gap: 6,
    icon: 18
  },
  S: {
    height: 24,
    padX: 8,
    font: 12,
    gap: 4,
    icon: 16
  }
};
const PALETTE = {
  primary: {
    filled: {
      bg: 'var(--primary-600)',
      bgHover: 'var(--primary-700)',
      bgActive: 'var(--primary-800)',
      fg: '#fff',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      bgHover: 'var(--primary-50)',
      bgActive: 'var(--primary-100)',
      fg: 'var(--primary-600)',
      border: 'var(--primary-600)'
    },
    transparent: {
      bg: 'transparent',
      bgHover: 'var(--primary-50)',
      bgActive: 'var(--primary-100)',
      fg: 'var(--primary-600)',
      border: 'transparent'
    }
  },
  gray: {
    filled: {
      bg: 'var(--gray-100)',
      bgHover: 'var(--gray-200)',
      bgActive: 'var(--gray-300)',
      fg: 'var(--text-default)',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      bgHover: 'var(--gray-50)',
      bgActive: 'var(--gray-100)',
      fg: 'var(--text-default)',
      border: 'var(--border-default)'
    },
    transparent: {
      bg: 'transparent',
      bgHover: 'var(--gray-50)',
      bgActive: 'var(--gray-100)',
      fg: 'var(--text-default)',
      border: 'transparent'
    }
  },
  negative: {
    filled: {
      bg: 'var(--red-500)',
      bgHover: 'var(--red-600)',
      bgActive: 'var(--red-700)',
      fg: '#fff',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      bgHover: 'var(--red-50)',
      bgActive: 'var(--red-100)',
      fg: 'var(--red-500)',
      border: 'var(--red-500)'
    },
    transparent: {
      bg: 'transparent',
      bgHover: 'var(--red-50)',
      bgActive: 'var(--red-100)',
      fg: 'var(--red-500)',
      border: 'transparent'
    }
  }
};

/**
 * Button — primary action control. variants filled/outline/transparent ×
 * colors primary/gray/negative × sizes L/M/S, with optional leading/trailing icons.
 */
function Button({
  children,
  variant = 'filled',
  color = 'primary',
  size = 'M',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.M;
  const p = (PALETTE[color] || PALETTE.primary)[variant] || PALETTE.primary.filled;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = disabled ? 'var(--surface-disabled)' : active ? p.bgActive : hover ? p.bgHover : p.bg;
  const fg = disabled ? 'var(--text-disabled)' : p.fg;
  const border = disabled ? 'var(--border-disabled)' : p.border;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.padX}px`,
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.1px',
      lineHeight: 1,
      color: fg,
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  L: {
    box: 40,
    icon: 20
  },
  M: {
    box: 32,
    icon: 18
  },
  S: {
    box: 24,
    icon: 16
  }
};
const PALETTE = {
  gray: {
    fg: 'var(--fg-low)',
    bgHover: 'var(--gray-100)',
    bgActive: 'var(--gray-200)'
  },
  primary: {
    fg: 'var(--primary-600)',
    bgHover: 'var(--primary-50)',
    bgActive: 'var(--primary-100)'
  },
  negative: {
    fg: 'var(--red-500)',
    bgHover: 'var(--red-50)',
    bgActive: 'var(--red-100)'
  }
};

/**
 * IconButton — square icon-only control for toolbars and table rows.
 * Optional notification dot/count badge.
 */
function IconButton({
  icon,
  color = 'gray',
  size = 'M',
  badge,
  variant = 'transparent',
  disabled = false,
  ariaLabel,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.M;
  const p = PALETTE[color] || PALETTE.gray;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const filled = variant === 'filled';
  const bg = disabled ? 'transparent' : active ? p.bgActive : hover || filled ? p.bgHover : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      color: disabled ? 'var(--text-disabled)' : p.fg,
      background: bg,
      border: 'none',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: badge === true ? 8 : 16,
      height: badge === true ? 8 : 16,
      padding: badge === true ? 0 : '0 4px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--red-500)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 600,
      lineHeight: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1.5px solid var(--surface-high)'
    }
  }, badge === true ? '' : badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — removable filter/keyword chip. Neutral by default; optional dismiss.
 */
function Tag({
  children,
  icon,
  onDismiss,
  selected = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: `0 ${onDismiss ? 6 : 10}px 0 10px`,
      borderRadius: 'var(--radius-full)',
      background: selected ? 'var(--primary-50)' : 'var(--gray-50)',
      color: selected ? 'var(--primary-700)' : 'var(--text-default)',
      border: `1px solid ${selected ? 'var(--primary-200)' : 'var(--border-subtle)'}`,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      cursor: 'default',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onDismiss,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      marginLeft: 2,
      padding: 0,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      background: hover ? 'var(--black-a10)' : 'transparent',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "dismiss",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — modal overlay. Header (title + close), body (children), footer (actions).
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  tone,
  icon,
  style = {}
}) {
  if (!open) return null;
  const toneColor = tone === 'negative' ? 'var(--red-500)' : tone === 'notice' ? 'var(--orange-500)' : tone === 'positive' ? 'var(--green-500)' : 'var(--primary-600)';
  const toneBg = tone === 'negative' ? 'var(--red-50)' : tone === 'notice' ? 'var(--orange-50)' : tone === 'positive' ? 'var(--green-50)' : 'var(--primary-50)';
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'var(--surface-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      backdropFilter: 'blur(1px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-high)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-2xl)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '16px 16px 12px 20px'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-8)',
      background: toneBg,
      color: toneColor,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      flex: 1,
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: '26px',
      color: 'var(--text-default)',
      paddingTop: icon ? 5 : 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u0110\xF3ng",
    style: {
      flex: 'none',
      display: 'inline-flex',
      padding: 6,
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-8)',
      cursor: 'pointer',
      color: 'var(--fg-low)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "dismiss",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 8px',
      overflowY: 'auto',
      fontSize: 14,
      color: 'var(--text-low)',
      lineHeight: '20px'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '16px 20px',
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  positive: {
    icon: 'checkmark-circle',
    color: 'var(--green-500)',
    bar: 'var(--green-500)'
  },
  negative: {
    icon: 'dismiss-circle',
    color: 'var(--red-500)',
    bar: 'var(--red-500)'
  },
  notice: {
    icon: 'warning',
    color: 'var(--orange-500)',
    bar: 'var(--orange-500)'
  },
  informative: {
    icon: 'info',
    color: 'var(--blue-500)',
    bar: 'var(--blue-500)'
  }
};

/**
 * Toast — transient inline notification. Use <Toast> for one, or compose a stack.
 */
function Toast({
  tone = 'informative',
  title,
  message,
  onClose,
  action,
  style = {}
}) {
  const t = TONES[tone] || TONES.informative;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      padding: '12px 12px 12px 16px',
      background: 'var(--surface-high)',
      borderRadius: 'var(--radius-8)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: t.bar
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.color,
    style: {
      marginTop: 1,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-default)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-low)',
      marginTop: title ? 2 : 0,
      lineHeight: '18px'
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u0110\xF3ng",
    style: {
      flex: 'none',
      display: 'inline-flex',
      padding: 4,
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-4)',
      cursor: 'pointer',
      color: 'var(--fg-low)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "dismiss",
    size: 16
  })));
}

/** ToastStack — fixed positioning container for a list of toasts. */
function ToastStack({
  children,
  position = 'bottom-right'
}) {
  const pos = {
    'bottom-right': {
      bottom: 24,
      right: 24,
      alignItems: 'flex-end'
    },
    'top-right': {
      top: 24,
      right: 24,
      alignItems: 'flex-end'
    },
    'top-center': {
      top: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      alignItems: 'center'
    }
  }[position];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 1100,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...pos
    }
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — hover label. Wraps a child; shows a small dark bubble on hover.
 */
function Tooltip({
  label,
  placement = 'top',
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 6
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 6
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 6
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, show && label && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 1200,
      ...pos,
      whiteSpace: 'nowrap',
      background: 'var(--gray-900)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: '16px',
      padding: '5px 8px',
      borderRadius: 'var(--radius-4)',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — boolean toggle with label. Supports indeterminate.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  disabled = false,
  style = {}
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-4)',
      background: on ? 'var(--primary-600)' : 'var(--surface-high)',
      border: `1.5px solid ${on ? 'var(--primary-600)' : 'var(--border-default)'}`,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 2,
      background: '#fff',
      borderRadius: 1
    }
  }) : checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "checkmark",
    size: 14,
    color: "#fff"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-default)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * DataTable — dense back-office table.
 * columns = [{ key, header, width, align, sortable, render(row) }]
 * Supports row selection, sort indicator, hover, sticky header, zebra optional.
 */
function DataTable({
  columns = [],
  data = [],
  rowKey = 'id',
  selectable = false,
  selected = [],
  onSelectChange,
  sort,
  onSortChange,
  zebra = false,
  dense = false,
  onRowClick,
  emptyText = 'Không có dữ liệu',
  style = {}
}) {
  const keyOf = (row, i) => (typeof rowKey === 'function' ? rowKey(row) : row[rowKey]) ?? i;
  const allKeys = data.map(keyOf);
  const allSel = selectable && data.length > 0 && allKeys.every(k => selected.includes(k));
  const someSel = selectable && selected.length > 0 && !allSel;
  const rowH = dense ? 40 : 48;
  function toggleAll() {
    if (!onSelectChange) return;
    onSelectChange(allSel ? [] : allKeys);
  }
  function toggleRow(k) {
    if (!onSelectChange) return;
    onSelectChange(selected.includes(k) ? selected.filter(x => x !== k) : [...selected, k]);
  }
  function clickSort(col) {
    if (!col.sortable || !onSortChange) return;
    const dir = sort && sort.key === col.key && sort.dir === 'asc' ? 'desc' : 'asc';
    onSortChange({
      key: col.key,
      dir
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: 'var(--surface-high)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--gray-50)'
    }
  }, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      width: 44,
      padding: '0 0 0 16px',
      height: 44,
      textAlign: 'left',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: allSel,
    indeterminate: someSel,
    onChange: toggleAll
  })), columns.map(col => {
    const active = sort && sort.key === col.key;
    return /*#__PURE__*/React.createElement("th", {
      key: col.key,
      onClick: () => clickSort(col),
      style: {
        height: 44,
        padding: '0 16px',
        whiteSpace: 'nowrap',
        textAlign: col.align || 'left',
        borderBottom: '1px solid var(--border-subtle)',
        fontSize: 12,
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.1px',
        color: 'var(--text-low)',
        textTransform: 'uppercase',
        cursor: col.sortable ? 'pointer' : 'default',
        userSelect: 'none',
        width: col.width
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        justifyContent: col.align === 'right' ? 'flex-end' : 'flex-start'
      }
    }, col.header, col.sortable && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: active ? sort.dir === 'asc' ? 'chevron-up' : 'chevron-down' : 'chevron-down',
      size: 14,
      color: active ? 'var(--primary-600)' : 'var(--gray-300)'
    })));
  }))), /*#__PURE__*/React.createElement("tbody", null, data.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0),
    style: {
      padding: '48px 16px',
      textAlign: 'center',
      color: 'var(--text-lowest)',
      fontSize: 14
    }
  }, emptyText)), data.map((row, i) => {
    const k = keyOf(row, i);
    const sel = selected.includes(k);
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      onClick: () => onRowClick && onRowClick(row),
      style: {
        height: rowH,
        background: sel ? 'var(--primary-50)' : zebra && i % 2 ? 'var(--gray-50)' : 'transparent',
        cursor: onRowClick ? 'pointer' : 'default',
        transition: 'background var(--dur-fast)'
      },
      onMouseEnter: e => {
        if (!sel) e.currentTarget.style.background = 'var(--gray-50)';
      },
      onMouseLeave: e => {
        if (!sel) e.currentTarget.style.background = zebra && i % 2 ? 'var(--gray-50)' : 'transparent';
      }
    }, selectable && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '0 0 0 16px',
        borderBottom: '1px solid var(--border-subtlest)'
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: sel,
      onChange: () => toggleRow(k)
    })), columns.map(col => /*#__PURE__*/React.createElement("td", {
      key: col.key,
      style: {
        padding: '0 16px',
        borderBottom: '1px solid var(--border-subtlest)',
        textAlign: col.align || 'left',
        fontSize: 14,
        color: 'var(--text-default)',
        whiteSpace: col.wrap ? 'normal' : 'nowrap'
      }
    }, col.render ? col.render(row) : row[col.key])));
  })))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Radio — single option in a group. Use RadioGroup to manage selection.
 */
function Radio({
  checked = false,
  onChange,
  label,
  value,
  name,
  disabled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(value),
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: 'var(--surface-high)',
      border: `1.5px solid ${checked ? 'var(--primary-600)' : 'var(--border-default)'}`,
      transition: 'border-color var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--primary-600)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-default)'
    }
  }, label));
}

/**
 * RadioGroup — manages a set of radios. options = [{ value, label }] or strings.
 */
function RadioGroup({
  value,
  onChange,
  options = [],
  name = 'radio-group',
  direction = 'column',
  gap = 10,
  disabled = false,
  style = {}
}) {
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap,
      ...style
    }
  }, norm.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    label: o.label,
    checked: value === o.value,
    onChange: onChange,
    disabled: disabled || o.disabled
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Select — dropdown picker. Lightweight custom popover styled to the DS;
 * options = [{ value, label }] or strings.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Chọn...',
  helperText,
  error,
  disabled = false,
  required = false,
  size = 'M',
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const h = size === 'L' ? 40 : size === 'S' ? 28 : 32;
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const current = norm.find(o => o.value === value);
  React.useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const borderColor = error ? 'var(--border-error)' : open ? 'var(--border-active)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      position: 'relative',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-default)',
      letterSpacing: '0.1px'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      height: h,
      padding: '0 10px 0 12px',
      width: '100%',
      background: disabled ? 'var(--surface-disabled)' : 'var(--surface-high)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-control)',
      boxShadow: open && !error ? 'var(--focus-ring)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'S' ? 13 : 14,
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: current ? 'var(--text-default)' : 'var(--text-lowest)',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, current ? current.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--fg-low)",
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-fast)'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: `calc(100% + 4px)`,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'var(--surface-high)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-8)',
      boxShadow: 'var(--shadow-md)',
      padding: 4,
      maxHeight: 260,
      overflowY: 'auto'
    }
  }, norm.map(o => {
    const sel = o.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        padding: '7px 10px',
        borderRadius: 'var(--radius-4)',
        cursor: 'pointer',
        fontSize: 14,
        color: 'var(--text-default)',
        background: sel ? 'var(--primary-50)' : 'transparent'
      },
      onMouseEnter: e => {
        if (!sel) e.currentTarget.style.background = 'var(--gray-50)';
      },
      onMouseLeave: e => {
        if (!sel) e.currentTarget.style.background = 'transparent';
      }
    }, o.label, sel && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "checkmark",
      size: 16,
      color: "var(--primary-600)"
    }));
  })), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: error ? 'var(--text-negative)' : 'var(--text-low)'
    }
  }, error && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "error",
    size: 14
  }), error || helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Switch — on/off toggle for settings.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  size = 'M',
  style = {}
}) {
  const w = size === 'S' ? 32 : 40;
  const h = size === 'S' ? 18 : 22;
  const knob = h - 6;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: w,
      height: h,
      flex: 'none',
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--primary-600)' : 'var(--gray-300)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? w - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-emphasized)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-default)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextField — labelled text input with supporting/error text and optional icons.
 */
function TextField({
  label,
  value,
  onChange,
  placeholder,
  helperText,
  error,
  required = false,
  disabled = false,
  iconLeft,
  iconRight,
  type = 'text',
  size = 'M',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'L' ? 40 : size === 'S' ? 28 : 32;
  const borderColor = error ? 'var(--border-error)' : focus ? 'var(--border-active)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-default)',
      letterSpacing: '0.1px'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-500)',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--surface-disabled)' : 'var(--surface-high)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-control)',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--fg-low)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'S' ? 13 : 14,
      color: 'var(--text-default)'
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 18,
    color: "var(--fg-low)"
  })), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: error ? 'var(--text-negative)' : 'var(--text-low)'
    }
  }, error && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "error",
    size: 14
  }), error || helperText));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageHeader.jsx
try { (() => {
/**
 * Breadcrumb — navigation trail. items = [{ label, href? }]. Last is current.
 */
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flexWrap: 'wrap',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || undefined,
      style: {
        fontSize: 13,
        color: last ? 'var(--text-default)' : 'var(--text-low)',
        fontWeight: last ? 'var(--weight-medium)' : 'var(--weight-regular)',
        textDecoration: 'none',
        cursor: last ? 'default' : 'pointer'
      },
      onMouseEnter: e => {
        if (!last) e.currentTarget.style.color = 'var(--text-brand)';
      },
      onMouseLeave: e => {
        if (!last) e.currentTarget.style.color = 'var(--text-low)';
      }
    }, it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      color: "var(--text-lowest)"
    }));
  }));
}

/**
 * PageHeader — breadcrumb + title + optional subtitle and right-aligned actions.
 */
function PageHeader({
  title,
  breadcrumb,
  subtitle,
  actions,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, breadcrumb && /*#__PURE__*/React.createElement(Breadcrumb, {
    items: breadcrumb
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 24,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: '32px',
      color: 'var(--text-default)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--text-low)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 'none'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Breadcrumb, PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/**
 * Pagination — page navigation for tables. Shows page numbers with ellipsis.
 */
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  style = {}
}) {
  const go = p => {
    if (p >= 1 && p <= pageCount && p !== page) onChange && onChange(p);
  };
  const pages = [];
  const add = p => pages.push(p);
  if (pageCount <= 7) {
    for (let i = 1; i <= pageCount; i++) add(i);
  } else {
    add(1);
    if (page > 3) add('…');
    for (let i = Math.max(2, page - 1); i <= Math.min(pageCount - 1, page + 1); i++) add(i);
    if (page < pageCount - 2) add('…');
    add(pageCount);
  }
  const cell = (active, dim) => ({
    minWidth: 32,
    height: 32,
    padding: '0 6px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${active ? 'var(--primary-600)' : 'var(--border-subtle)'}`,
    borderRadius: 'var(--radius-control)',
    background: active ? 'var(--primary-600)' : 'var(--surface-high)',
    color: active ? '#fff' : dim ? 'var(--text-lowest)' : 'var(--text-default)',
    fontSize: 13,
    fontWeight: 'var(--weight-medium)',
    cursor: dim ? 'default' : 'pointer'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(page - 1),
    disabled: page <= 1,
    style: {
      ...cell(false, page <= 1),
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 'e' + i,
    style: {
      ...cell(false, true),
      border: 'none'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    onClick: () => go(p),
    style: cell(p === page, false)
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(page + 1),
    disabled: page >= pageCount,
    style: {
      ...cell(false, page >= pageCount),
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
/**
 * Sidebar — app navigation rail. items = [{ id, label, icon, badge?, children? }].
 * Collapsible; renders the BIDV mark when collapsed.
 */
function Sidebar({
  items = [],
  active,
  onSelect,
  collapsed = false,
  onToggleCollapse,
  logoSrc,
  markSrc,
  footer,
  style = {}
}) {
  const [openGroups, setOpenGroups] = React.useState(() => {
    const o = {};
    items.forEach(it => {
      if (it.children && it.children.some(c => c.id === active)) o[it.id] = true;
    });
    return o;
  });
  const w = collapsed ? 'var(--layout-sidebar-collapsed-w)' : 'var(--layout-sidebar-w)';
  function Row({
    it,
    child
  }) {
    const isActive = it.id === active;
    const hasChildren = it.children && it.children.length;
    const open = openGroups[it.id];
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => hasChildren ? setOpenGroups(g => ({
        ...g,
        [it.id]: !g[it.id]
      })) : onSelect && onSelect(it.id),
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      title: collapsed ? it.label : undefined,
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        height: 40,
        padding: collapsed ? 0 : `0 ${child ? 12 : 10}px 0 ${child ? 40 : 10}px`,
        justifyContent: collapsed ? 'center' : 'flex-start',
        border: 'none',
        borderRadius: 'var(--radius-8)',
        cursor: 'pointer',
        textAlign: 'left',
        background: isActive ? 'var(--white-a20)' : hover ? 'var(--white-a10)' : 'transparent',
        color: isActive ? '#fff' : 'var(--white-a80)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: isActive ? 'var(--weight-medium)' : 'var(--weight-regular)',
        transition: 'background var(--dur-fast)'
      }
    }, isActive && !child && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 8,
        bottom: 8,
        width: 3,
        borderRadius: '0 3px 3px 0',
        background: '#fff'
      }
    }), it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20,
      color: isActive ? '#fff' : 'var(--white-a80)'
    }), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.label), !collapsed && it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 18,
        height: 18,
        padding: '0 5px',
        borderRadius: 'var(--radius-full)',
        background: 'var(--red-500)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, it.badge), !collapsed && hasChildren && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 16,
      color: "var(--white-a80)",
      style: {
        transform: open ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-fast)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: w,
      flex: 'none',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--primary-700)',
      borderRight: '1px solid var(--white-a10)',
      transition: 'width var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--layout-topnav-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: collapsed ? 'center' : 'space-between',
      padding: collapsed ? 0 : '0 12px 0 16px',
      borderBottom: '1px solid var(--white-a10)',
      flex: 'none'
    }
  }, collapsed ? markSrc && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "BIDV",
    style: {
      height: 28
    }
  }) : logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "BIDV",
    style: {
      height: 26
    }
  }), !collapsed && onToggleCollapse && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleCollapse,
    "aria-label": "Thu g\u1ECDn",
    style: {
      display: 'inline-flex',
      padding: 6,
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-8)',
      cursor: 'pointer',
      color: 'var(--white-a80)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 18
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id
  }, /*#__PURE__*/React.createElement(Row, {
    it: it
  }), !collapsed && it.children && openGroups[it.id] && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      marginTop: 2
    }
  }, it.children.map(c => /*#__PURE__*/React.createElement(Row, {
    key: c.id,
    it: c,
    child: true
  })))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      borderTop: '1px solid var(--white-a10)',
      flex: 'none'
    }
  }, footer));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — horizontal tab bar with active underline. Supports icon + count badge.
 * tabs = [{ id, label, icon?, count? }]
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const active = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => onChange && onChange(t.id),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 40,
        padding: '0 12px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.1px',
        color: active ? 'var(--primary-600)' : 'var(--text-low)',
        transition: 'color var(--dur-fast)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-default)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-low)';
      }
    }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 18
    }), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 18,
        height: 18,
        padding: '0 5px',
        borderRadius: 'var(--radius-full)',
        background: active ? 'var(--primary-100)' : 'var(--gray-100)',
        color: active ? 'var(--primary-700)' : 'var(--text-low)',
        fontSize: 11,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, t.count), active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        background: 'var(--primary-600)',
        borderRadius: '2px 2px 0 0'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
/**
 * TopNav — application top bar: leading slot (menu/logo), global search,
 * utility icons, and a user cluster.
 */
function TopNav({
  onMenu,
  logoSrc,
  title,
  searchPlaceholder = 'Tìm kiếm giao dịch, tài khoản...',
  onSearch,
  notifications,
  user,
  right,
  style = {}
}) {
  const [q, setQ] = React.useState('');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--layout-topnav-h)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 16px',
      background: 'var(--surface-high)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, onMenu && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onMenu,
    "aria-label": "Menu",
    style: {
      display: 'inline-flex',
      padding: 8,
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-8)',
      cursor: 'pointer',
      color: 'var(--fg-low)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "grid",
    size: 20
  })), logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "BIDV",
    style: {
      height: 24,
      flex: 'none'
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-default)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 480,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 12px',
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    color: "var(--fg-low)"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    placeholder: searchPlaceholder,
    onChange: e => {
      setQ(e.target.value);
      onSearch && onSearch(e.target.value);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-default)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginLeft: 'auto'
    }
  }, right, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Th\xF4ng b\xE1o",
    style: {
      position: 'relative',
      display: 'inline-flex',
      padding: 8,
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-8)',
      cursor: 'pointer',
      color: 'var(--fg-low)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "alert",
    size: 20
  }), notifications > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--red-500)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1.5px solid var(--surface-high)'
    }
  }, notifications)), user && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 8px 4px 4px',
      marginLeft: 4,
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: user.name,
    src: user.avatar,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-default)'
    }
  }, user.name), user.role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-low)'
    }
  }, user.role)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--fg-low)"
  }))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back-office/App.jsx
try { (() => {
// App shell + routing — BIDV Back Office UI kit
const {
  Sidebar,
  TopNav,
  Toast,
  ToastStack
} = window.BIDVBackOfficeDesignSystem_478bc4;
const NAV = [{
  id: 'dashboard',
  label: 'Tổng quan',
  icon: 'home'
}, {
  id: 'transactions',
  label: 'Giao dịch',
  icon: 'arrow-swap',
  badge: 27,
  children: [{
    id: 'transactions',
    label: 'Quản lý giao dịch'
  }, {
    id: 'approvals',
    label: 'Phê duyệt'
  }]
}, {
  id: 'accounts',
  label: 'Tài khoản',
  icon: 'wallet',
  children: [{
    id: 'accounts',
    label: 'Danh sách tài khoản'
  }, {
    id: 'open',
    label: 'Mở tài khoản'
  }]
}, {
  id: 'customers',
  label: 'Khách hàng',
  icon: 'people'
}, {
  id: 'cards',
  label: 'Thẻ',
  icon: 'building-bank'
}, {
  id: 'reports',
  label: 'Báo cáo',
  icon: 'data-bar'
}, {
  id: 'settings',
  label: 'Cấu hình',
  icon: 'settings'
}];
const TITLES = {
  dashboard: 'Tổng quan',
  transactions: 'Quản lý giao dịch',
  approvals: 'Phê duyệt',
  accounts: 'Tài khoản',
  customers: 'Khách hàng',
  cards: 'Thẻ',
  reports: 'Báo cáo',
  settings: 'Cấu hình'
};
function BOApp() {
  const [authed, setAuthed] = React.useState(false);
  const [view, setView] = React.useState('dashboard');
  const [collapsed, setCollapsed] = React.useState(false);
  const [openTxn, setOpenTxn] = React.useState(null);
  const [toasts, setToasts] = React.useState([]);
  function pushToast(t) {
    const id = Date.now();
    setToasts(ts => [...ts, {
      ...t,
      id
    }]);
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), 4200);
  }
  function approve() {
    const t = openTxn;
    setOpenTxn(null);
    pushToast({
      tone: 'positive',
      title: 'Đã phê duyệt',
      message: `Lệnh ${t.id.slice(-6)} đã được phê duyệt thành công.`
    });
  }
  function reject() {
    const t = openTxn;
    setOpenTxn(null);
    pushToast({
      tone: 'negative',
      title: 'Đã từ chối',
      message: `Lệnh ${t.id.slice(-6)} đã bị từ chối.`
    });
  }
  if (!authed) return /*#__PURE__*/React.createElement(window.BOLogin, {
    onLogin: () => setAuthed(true)
  });
  const goTxn = () => setView('transactions');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      overflow: 'hidden',
      background: 'var(--surface-default)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    items: NAV,
    active: view,
    onSelect: id => {
      setView(id);
    },
    collapsed: collapsed,
    onToggleCollapse: () => setCollapsed(c => !c),
    logoSrc: "../../assets/bidv-logo-full.svg",
    markSrc: "../../assets/bidv-mark.svg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    onMenu: () => setCollapsed(c => !c),
    notifications: 5,
    user: {
      name: 'Nguyễn Văn An',
      role: 'Giao dịch viên · CN Hà Nội'
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, view === 'dashboard' && /*#__PURE__*/React.createElement(window.BODashboard, {
    onOpenTxn: goTxn
  }), (view === 'transactions' || view === 'approvals') && /*#__PURE__*/React.createElement(window.BOTransactions, {
    onOpenTxn: setOpenTxn,
    openTxn: openTxn,
    onCloseTxn: () => setOpenTxn(null),
    onApprove: approve,
    onReject: reject
  }), !['dashboard', 'transactions', 'approvals'].includes(view) && /*#__PURE__*/React.createElement(Placeholder, {
    title: TITLES[view]
  })))), /*#__PURE__*/React.createElement(ToastStack, {
    position: "bottom-right"
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    tone: t.tone,
    title: t.title,
    message: t.message,
    onClose: () => setToasts(ts => ts.filter(x => x.id !== t.id))
  }))));
}
function Placeholder({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      color: 'var(--text-lowest)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-12)',
      background: 'var(--surface-high)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "fluent:beaker-24-regular",
    width: "26",
    style: {
      color: 'var(--text-lowest)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--text-low)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "M\xE0n h\xECnh m\u1EABu \u2014 ch\u01B0a c\xF3 n\u1ED9i dung trong UI kit n\xE0y."));
}
window.BOApp = BOApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back-office/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back-office/Dashboard.jsx
try { (() => {
// Dashboard screen — BIDV Back Office
const {
  Card,
  Badge,
  Avatar,
  Button,
  IconButton,
  DataTable
} = window.BIDVBackOfficeDesignSystem_478bc4;
function StatCard({
  s
}) {
  return /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    padding: 16,
    style: {
      flex: '1 1 0',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-8)',
      background: 'var(--primary-50)',
      color: 'var(--primary-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: window.BIDVBackOfficeDesignSystem_478bc4.ICONS[s.icon] || s.icon,
    width: "20"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      fontSize: 12,
      fontWeight: 500,
      color: s.up ? 'var(--green-600)' : 'var(--orange-600)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: s.up ? 'fluent:arrow-trending-24-regular' : 'fluent:warning-24-regular',
    width: "14"
  }), s.delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-default)',
      letterSpacing: '-0.25px'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 13,
      color: 'var(--text-low)'
    }
  }, s.label));
}
function VolumeChart() {
  const bars = [{
    d: 'T2',
    v: 62
  }, {
    d: 'T3',
    v: 78
  }, {
    d: 'T4',
    v: 54
  }, {
    d: 'T5',
    v: 88
  }, {
    d: 'T6',
    v: 72
  }, {
    d: 'T7',
    v: 40
  }, {
    d: 'CN',
    v: 28
  }];
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      flex: '1 1 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--text-default)'
    }
  }, "L\u01B0u l\u01B0\u1EE3ng giao d\u1ECBch"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-low)',
      marginTop: 2
    }
  }, "7 ng\xE0y g\u1EA7n nh\u1EA5t")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    color: "gray",
    size: "S",
    iconRight: "chevron-down"
  }, "Tu\u1EA7n n\xE0y")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      height: 150
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 34,
      height: `${b.v}%`,
      minHeight: 4,
      borderRadius: '6px 6px 0 0',
      background: i === 3 ? 'var(--primary-600)' : 'var(--primary-100)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-low)',
      flex: 'none'
    }
  }, b.d)))));
}
function ApprovalQueue({
  onOpen
}) {
  const pend = window.BO_DATA.transactions.filter(t => t.status === 'Chờ duyệt' || t.status === 'Đang xử lý').slice(0, 4);
  return /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      width: 332,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--text-default)'
    }
  }, "Ch\u1EDD ph\xEA duy\u1EC7t"), /*#__PURE__*/React.createElement(Badge, {
    tone: "notice"
  }, pend.length, " m\u1EE5c")), /*#__PURE__*/React.createElement("div", null, pend.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    onClick: onOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderTop: '1px solid var(--border-subtlest)',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--gray-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.customer,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-default)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, t.customer), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-low)'
    }
  }, window.BO_DATA.fmtVND(t.amount))), /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "fluent:chevron-right-24-regular",
    width: "16",
    style: {
      color: 'var(--text-lowest)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "transparent",
    fullWidth: true,
    onClick: onOpen
  }, "Xem t\u1EA5t c\u1EA3")));
}
function BODashboard({
  onOpenTxn
}) {
  const {
    stats,
    transactions,
    fmtVND
  } = window.BO_DATA;
  const recent = transactions.slice(0, 5);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(StatCard, {
    key: i,
    s: s
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(VolumeChart, null), /*#__PURE__*/React.createElement(ApprovalQueue, {
    onOpen: onOpenTxn
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      color: 'var(--text-default)'
    }
  }, "Giao d\u1ECBch g\u1EA7n \u0111\xE2y"), /*#__PURE__*/React.createElement(Button, {
    variant: "transparent",
    size: "S",
    iconRight: "chevron-right",
    onClick: onOpenTxn
  }, "T\u1EA5t c\u1EA3 giao d\u1ECBch")), /*#__PURE__*/React.createElement(DataTable, {
    rowKey: "id",
    onRowClick: onOpenTxn,
    style: {
      border: 'none',
      borderRadius: 0
    },
    columns: [{
      key: 'id',
      header: 'Mã GD',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12
        }
      }, r.id.slice(-6))
    }, {
      key: 'customer',
      header: 'Khách hàng',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.customer,
        size: "xs"
      }), r.customer)
    }, {
      key: 'type',
      header: 'Loại',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-low)'
        }
      }, r.type)
    }, {
      key: 'amount',
      header: 'Số tiền',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("b", {
        style: {
          fontWeight: 500
        }
      }, fmtVND(r.amount))
    }, {
      key: 'status',
      header: 'Trạng thái',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: 'date',
      header: 'Thời gian',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-low)',
          fontSize: 13
        }
      }, r.date.split(' ')[1])
    }],
    data: recent
  })));
}
window.BODashboard = BODashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back-office/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back-office/Login.jsx
try { (() => {
// Login screen — BIDV Back Office
const {
  Button,
  TextField,
  Checkbox
} = window.BIDVBackOfficeDesignSystem_478bc4;
function BOLogin({
  onLogin
}) {
  const [user, setUser] = React.useState('giaodichvien01');
  const [pw, setPw] = React.useState('••••••••');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      background: 'var(--surface-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '1 1 0',
      minWidth: 0,
      background: 'var(--primary-600)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 48,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "bidv-login-brand",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    shape: "rect",
    fit: "cover",
    placeholder: "Th\u1EA3 \u1EA3nh th\u01B0\u01A1ng hi\u1EC7u BIDV (gen b\u1EB1ng Higgsfield)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(180deg, rgba(0,54,52,0.55) 0%, rgba(0,107,104,0.35) 45%, rgba(0,54,52,0.86) 100%)',
      backgroundImage: 'radial-gradient(circle at 82% 4%, rgba(255,183,27,0.22), transparent 44%), linear-gradient(180deg, rgba(0,54,52,0.55) 0%, rgba(0,107,104,0.30) 45%, rgba(0,54,52,0.88) 100%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bidv-logo-full.svg",
    alt: "BIDV",
    style: {
      position: 'relative',
      height: 34,
      filter: 'brightness(0) invert(1)',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 600,
      lineHeight: '42px',
      letterSpacing: '-0.25px',
      maxWidth: 420,
      textShadow: '0 1px 12px rgba(0,0,0,0.25)'
    }
  }, "H\u1EC7 th\u1ED1ng qu\u1EA3n tr\u1ECB", /*#__PURE__*/React.createElement("br", null), "v\u1EADn h\xE0nh ng\xE2n h\xE0ng"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 15,
      lineHeight: '24px',
      color: 'rgba(255,255,255,0.88)',
      maxWidth: 380,
      textShadow: '0 1px 8px rgba(0,0,0,0.25)'
    }
  }, "C\u1ED5ng nghi\u1EC7p v\u1EE5 n\u1ED9i b\u1ED9 d\xE0nh cho giao d\u1ECBch vi\xEAn v\xE0 c\xE1n b\u1ED9 ph\xEA duy\u1EC7t. Qu\u1EA3n l\xFD giao d\u1ECBch, t\xE0i kho\u1EA3n v\xE0 ph\xEA duy\u1EC7t t\u1EADp trung.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      color: 'rgba(255,255,255,0.82)'
    }
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "fluent:shield-checkmark-24-regular",
    width: "18"
  }), "K\u1EBFt n\u1ED1i \u0111\u01B0\u1EE3c m\xE3 h\xF3a \xB7 Phi\xEAn b\u1EA3n 4.2.0")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 480px',
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40,
      background: 'var(--surface-high)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-default)'
    }
  }, "\u0110\u0103ng nh\u1EADp"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 28px',
      fontSize: 14,
      color: 'var(--text-low)'
    }
  }, "S\u1EED d\u1EE5ng t\xE0i kho\u1EA3n n\u1ED9i b\u1ED9 BIDV c\u1EE7a b\u1EA1n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "T\xEAn \u0111\u0103ng nh\u1EADp",
    value: user,
    onChange: e => setUser(e.target.value),
    iconLeft: "person",
    size: "L"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "M\u1EADt kh\u1EA9u",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    iconLeft: "settings",
    iconRight: "eye",
    size: "L"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    onChange: () => {},
    label: "Ghi nh\u1EDB \u0111\u0103ng nh\u1EADp"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      color: 'var(--text-brand)',
      fontWeight: 500
    }
  }, "Qu\xEAn m\u1EADt kh\u1EA9u?")), /*#__PURE__*/React.createElement(Button, {
    size: "L",
    fullWidth: true,
    onClick: onLogin,
    iconRight: "chevron-right"
  }, "\u0110\u0103ng nh\u1EADp")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 12,
      color: 'var(--text-lowest)',
      textAlign: 'center'
    }
  }, "\xA9 2026 Ng\xE2n h\xE0ng TMCP \u0110\u1EA7u t\u01B0 v\xE0 Ph\xE1t tri\u1EC3n Vi\u1EC7t Nam"))));
}
window.BOLogin = BOLogin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back-office/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back-office/Transactions.jsx
try { (() => {
// Transactions list + detail — BIDV Back Office
const {
  PageHeader,
  Tabs,
  DataTable,
  Badge,
  Avatar,
  Button,
  IconButton,
  Tag,
  Select,
  TextField,
  Pagination,
  Dialog,
  Tooltip
} = window.BIDVBackOfficeDesignSystem_478bc4;
function DetailRow({
  label,
  children,
  mono
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtlest)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-low)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-default)',
      textAlign: 'right',
      fontFamily: mono ? 'var(--font-mono)' : 'inherit'
    }
  }, children));
}
function TxnDialog({
  txn,
  open,
  onClose,
  onApprove,
  onReject
}) {
  if (!txn) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    width: 460,
    title: `Chi tiết giao dịch`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '4px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: txn.customer,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-default)'
    }
  }, txn.customer), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-low)',
      fontFamily: 'var(--font-mono)'
    }
  }, txn.acct)), /*#__PURE__*/React.createElement(Badge, {
    tone: txn.tone,
    dot: true
  }, txn.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--primary-50)',
      borderRadius: 'var(--radius-8)',
      padding: '14px 16px',
      margin: '4px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-low)'
    }
  }, "S\u1ED1 ti\u1EC1n giao d\u1ECBch"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--primary-700)',
      letterSpacing: '-0.25px'
    }
  }, window.BO_DATA.fmtVND(txn.amount))), /*#__PURE__*/React.createElement(DetailRow, {
    label: "M\xE3 giao d\u1ECBch",
    mono: true
  }, txn.id), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Lo\u1EA1i giao d\u1ECBch"
  }, txn.type), /*#__PURE__*/React.createElement(DetailRow, {
    label: "K\xEAnh"
  }, txn.channel), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Chi nh\xE1nh"
  }, txn.branch), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Ng\u01B0\u1EDDi t\u1EA1o l\u1EC7nh"
  }, txn.maker), /*#__PURE__*/React.createElement(DetailRow, {
    label: "Th\u1EDDi gian"
  }, txn.date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      paddingTop: 16
    }
  }, txn.status === 'Chờ duyệt' || txn.status === 'Đang xử lý' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    color: "negative",
    iconLeft: "dismiss",
    onClick: onReject
  }, "T\u1EEB ch\u1ED1i"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    iconLeft: "checkmark",
    onClick: onApprove
  }, "Ph\xEA duy\u1EC7t")) : /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    color: "gray",
    iconLeft: "print",
    onClick: onClose
  }, "In bi\xEAn lai")));
}
function BOTransactions({
  onOpenTxn,
  openTxn,
  onCloseTxn,
  onApprove,
  onReject
}) {
  const all = window.BO_DATA.transactions;
  const [tab, setTab] = React.useState('all');
  const [sel, setSel] = React.useState([]);
  const [sort, setSort] = React.useState({
    key: 'date',
    dir: 'desc'
  });
  const [page, setPage] = React.useState(1);
  const {
    fmtVND
  } = window.BO_DATA;
  const tabCounts = {
    all: all.length,
    pending: all.filter(t => t.status === 'Chờ duyệt').length,
    processing: all.filter(t => t.status === 'Đang xử lý').length,
    done: all.filter(t => t.status === 'Thành công').length
  };
  const filtered = all.filter(t => tab === 'all' ? true : tab === 'pending' ? t.status === 'Chờ duyệt' : tab === 'processing' ? t.status === 'Đang xử lý' : t.status === 'Thành công');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    breadcrumb: [{
      label: 'Trang chủ',
      href: '#'
    }, {
      label: 'Giao dịch',
      href: '#'
    }, {
      label: 'Quản lý giao dịch'
    }],
    title: "Qu\u1EA3n l\xFD giao d\u1ECBch",
    subtitle: "Theo d\xF5i, tra so\xE1t v\xE0 ph\xEA duy\u1EC7t l\u1EC7nh giao d\u1ECBch",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      color: "gray",
      iconLeft: "download"
    }, "Xu\u1EA5t Excel"), /*#__PURE__*/React.createElement(Button, {
      iconLeft: "add"
    }, "T\u1EA1o l\u1EC7nh m\u1EDBi"))
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: t => {
      setTab(t);
      setSel([]);
      setPage(1);
    },
    tabs: [{
      id: 'all',
      label: 'Tất cả',
      count: tabCounts.all
    }, {
      id: 'pending',
      label: 'Chờ duyệt',
      icon: 'history',
      count: tabCounts.pending
    }, {
      id: 'processing',
      label: 'Đang xử lý',
      count: tabCounts.processing
    }, {
      id: 'done',
      label: 'Đã hoàn tất',
      count: tabCounts.done
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    placeholder: "T\xECm theo m\xE3 GD, kh\xE1ch h\xE0ng, s\u1ED1 t\xE0i kho\u1EA3n...",
    iconLeft: "search"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Chi nh\xE1nh",
    options: ['Tất cả chi nhánh', 'Hội sở', 'Hà Nội', 'TP. HCM', 'Đà Nẵng']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "K\xEAnh",
    options: ['Tất cả', 'Internal', 'Napas', 'ATM']
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    color: "gray",
    iconLeft: "calendar"
  }, "01/06 \u2013 24/06"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Tag, {
    icon: "filter",
    onDismiss: () => {}
  }, "Lo\u1EA1i: Chuy\u1EC3n kho\u1EA3n")), sel.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 16px',
      background: 'var(--primary-50)',
      border: '1px solid var(--primary-200)',
      borderRadius: 'var(--radius-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--primary-700)'
    }
  }, "\u0110\xE3 ch\u1ECDn ", sel.length, " giao d\u1ECBch"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    color: "negative",
    size: "S",
    iconLeft: "dismiss"
  }, "T\u1EEB ch\u1ED1i"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "S",
    iconLeft: "checkmark"
  }, "Ph\xEA duy\u1EC7t h\xE0ng lo\u1EA1t")), /*#__PURE__*/React.createElement(DataTable, {
    rowKey: "id",
    selectable: true,
    selected: sel,
    onSelectChange: setSel,
    sort: sort,
    onSortChange: setSort,
    onRowClick: onOpenTxn,
    columns: [{
      key: 'id',
      header: 'Mã GD',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12
        }
      }, r.id)
    }, {
      key: 'customer',
      header: 'Khách hàng',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.customer,
        size: "xs"
      }), r.customer)
    }, {
      key: 'type',
      header: 'Loại',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-low)'
        }
      }, r.type)
    }, {
      key: 'channel',
      header: 'Kênh',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral",
        size: "S"
      }, r.channel)
    }, {
      key: 'amount',
      header: 'Số tiền',
      align: 'right',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("b", {
        style: {
          fontWeight: 500
        }
      }, fmtVND(r.amount))
    }, {
      key: 'status',
      header: 'Trạng thái',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: 'date',
      header: 'Thời gian',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-low)',
          fontSize: 13
        }
      }, r.date)
    }, {
      key: 'actions',
      header: '',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          gap: 2
        },
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement(Tooltip, {
        label: "Xem chi ti\u1EBFt"
      }, /*#__PURE__*/React.createElement(IconButton, {
        icon: "eye",
        size: "S",
        ariaLabel: "Xem",
        onClick: () => onOpenTxn(r)
      })), /*#__PURE__*/React.createElement(IconButton, {
        icon: "more-horizontal",
        size: "S",
        ariaLabel: "Kh\xE1c"
      }))
    }],
    data: filtered
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-low)'
    }
  }, "Hi\u1EC3n th\u1ECB 1\u2013", filtered.length, " tr\xEAn t\u1ED5ng ", filtered.length, " giao d\u1ECBch"), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: 8,
    onChange: setPage
  })), /*#__PURE__*/React.createElement(TxnDialog, {
    txn: openTxn,
    open: !!openTxn,
    onClose: onCloseTxn,
    onApprove: onApprove,
    onReject: onReject
  }));
}
window.BOTransactions = BOTransactions;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back-office/Transactions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/back-office/data.js
try { (() => {
// Shared mock data for the BIDV Back Office UI kit
window.BO_DATA = function () {
  const fmtVND = n => n.toLocaleString('vi-VN') + ' ₫';
  const transactions = [{
    id: 'GD202606240012',
    customer: 'Nguyễn Văn An',
    acct: '2110 **** 8842',
    branch: 'Hà Nội',
    type: 'Chuyển khoản',
    channel: 'Internal',
    amount: 15000000,
    status: 'Thành công',
    tone: 'positive',
    date: '24/06/2026 14:32',
    maker: 'Trần Thị Bình'
  }, {
    id: 'GD202606240013',
    customer: 'Công ty TNHH Phú Thái',
    acct: '1900 **** 0271',
    branch: 'Hội sở',
    type: 'Chuyển khoản',
    channel: 'Napas',
    amount: 248500000,
    status: 'Chờ duyệt',
    tone: 'informative',
    date: '24/06/2026 14:21',
    maker: 'Lê Minh Cường'
  }, {
    id: 'GD202606240014',
    customer: 'Lê Minh Cường',
    acct: '2110 **** 5530',
    branch: 'TP. HCM',
    type: 'Nạp tiền',
    channel: 'Internal',
    amount: 4875000,
    status: 'Đang xử lý',
    tone: 'notice',
    date: '24/06/2026 13:58',
    maker: 'Nguyễn Văn An'
  }, {
    id: 'GD202606240015',
    customer: 'Phạm Thu Hà',
    acct: '3140 **** 1199',
    branch: 'Đà Nẵng',
    type: 'Rút tiền',
    channel: 'ATM',
    amount: 760000,
    status: 'Từ chối',
    tone: 'negative',
    date: '24/06/2026 13:40',
    maker: 'Phạm Thu Hà'
  }, {
    id: 'GD202606240016',
    customer: 'Vũ Đức Thành',
    acct: '2110 **** 7723',
    branch: 'Hà Nội',
    type: 'Chuyển khoản',
    channel: 'Internal',
    amount: 32000000,
    status: 'Thành công',
    tone: 'positive',
    date: '24/06/2026 12:11',
    maker: 'Trần Thị Bình'
  }, {
    id: 'GD202606240017',
    customer: 'Hoàng Lan Anh',
    acct: '1900 **** 4408',
    branch: 'Hội sở',
    type: 'Chuyển khoản',
    channel: 'Napas',
    amount: 5400000,
    status: 'Chờ duyệt',
    tone: 'informative',
    date: '24/06/2026 11:47',
    maker: 'Lê Minh Cường'
  }, {
    id: 'GD202606240018',
    customer: 'Đặng Quốc Bảo',
    acct: '3140 **** 9921',
    branch: 'Đà Nẵng',
    type: 'Nạp tiền',
    channel: 'Internal',
    amount: 1200000,
    status: 'Thành công',
    tone: 'positive',
    date: '24/06/2026 11:20',
    maker: 'Phạm Thu Hà'
  }, {
    id: 'GD202606240019',
    customer: 'Ngô Thị Mai',
    acct: '2110 **** 3310',
    branch: 'TP. HCM',
    type: 'Chuyển khoản',
    channel: 'Internal',
    amount: 89000000,
    status: 'Đang xử lý',
    tone: 'notice',
    date: '24/06/2026 10:55',
    maker: 'Nguyễn Văn An'
  }, {
    id: 'GD202606240020',
    customer: 'Bùi Văn Khôi',
    acct: '1900 **** 6655',
    branch: 'Hà Nội',
    type: 'Rút tiền',
    channel: 'ATM',
    amount: 2000000,
    status: 'Thành công',
    tone: 'positive',
    date: '24/06/2026 10:30',
    maker: 'Trần Thị Bình'
  }];
  const stats = [{
    label: 'Tổng giao dịch hôm nay',
    value: '1.248',
    delta: '+12,4%',
    up: true,
    icon: 'arrow-swap'
  }, {
    label: 'Tổng giá trị',
    value: '48,2 tỷ ₫',
    delta: '+8,1%',
    up: true,
    icon: 'money'
  }, {
    label: 'Chờ phê duyệt',
    value: '27',
    delta: '5 quá hạn',
    up: false,
    icon: 'history'
  }, {
    label: 'Tỷ lệ thành công',
    value: '98,6%',
    delta: '+0,3%',
    up: true,
    icon: 'checkmark-circle'
  }];
  return {
    fmtVND,
    transactions,
    stats
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back-office/data.js", error: String((e && e.message) || e) }); }

// ui_kits/back-office/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/back-office/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
