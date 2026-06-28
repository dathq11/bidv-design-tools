import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { L: { box: 40, icon: 20 }, M: { box: 32, icon: 18 }, S: { box: 24, icon: 16 } };

const PALETTE = {
  gray: { fg: 'var(--fg-low)', bgHover: 'var(--gray-100)', bgActive: 'var(--gray-200)' },
  primary: { fg: 'var(--primary-600)', bgHover: 'var(--primary-50)', bgActive: 'var(--primary-100)' },
  negative: { fg: 'var(--red-500)', bgHover: 'var(--red-50)', bgActive: 'var(--red-100)' },
};

/**
 * IconButton — square icon-only control for toolbars and table rows.
 * Optional notification dot/count badge.
 */
export function IconButton({
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
  const bg = disabled ? 'transparent' : active ? p.bgActive : (hover || filled) ? p.bgHover : 'transparent';

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={s.icon} />
      {badge != null && (
        <span style={{
          position: 'absolute', top: 2, right: 2,
          minWidth: badge === true ? 8 : 16, height: badge === true ? 8 : 16,
          padding: badge === true ? 0 : '0 4px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--red-500)', color: '#fff',
          fontSize: 10, fontWeight: 600, lineHeight: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid var(--surface-high)',
        }}>
          {badge === true ? '' : badge}
        </span>
      )}
    </button>
  );
}
