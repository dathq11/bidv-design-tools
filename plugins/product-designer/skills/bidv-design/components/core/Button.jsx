import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  L: { height: 40, padX: 16, font: 14, gap: 8, icon: 20 },
  M: { height: 32, padX: 12, font: 14, gap: 6, icon: 18 },
  S: { height: 24, padX: 8,  font: 12, gap: 4, icon: 16 },
};

const PALETTE = {
  primary: {
    filled:      { bg: 'var(--primary-600)', bgHover: 'var(--primary-700)', bgActive: 'var(--primary-800)', fg: '#fff', border: 'transparent' },
    outline:     { bg: 'transparent', bgHover: 'var(--primary-50)', bgActive: 'var(--primary-100)', fg: 'var(--primary-600)', border: 'var(--primary-600)' },
    transparent: { bg: 'transparent', bgHover: 'var(--primary-50)', bgActive: 'var(--primary-100)', fg: 'var(--primary-600)', border: 'transparent' },
  },
  gray: {
    filled:      { bg: 'var(--gray-100)', bgHover: 'var(--gray-200)', bgActive: 'var(--gray-300)', fg: 'var(--text-default)', border: 'transparent' },
    outline:     { bg: 'transparent', bgHover: 'var(--gray-50)', bgActive: 'var(--gray-100)', fg: 'var(--text-default)', border: 'var(--border-default)' },
    transparent: { bg: 'transparent', bgHover: 'var(--gray-50)', bgActive: 'var(--gray-100)', fg: 'var(--text-default)', border: 'transparent' },
  },
  negative: {
    filled:      { bg: 'var(--red-500)', bgHover: 'var(--red-600)', bgActive: 'var(--red-700)', fg: '#fff', border: 'transparent' },
    outline:     { bg: 'transparent', bgHover: 'var(--red-50)', bgActive: 'var(--red-100)', fg: 'var(--red-500)', border: 'var(--red-500)' },
    transparent: { bg: 'transparent', bgHover: 'var(--red-50)', bgActive: 'var(--red-100)', fg: 'var(--red-500)', border: 'transparent' },
  },
};

/**
 * Button — primary action control. variants filled/outline/transparent ×
 * colors primary/gray/negative × sizes L/M/S, with optional leading/trailing icons.
 */
export function Button({
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

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
