import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  neutral:     { bg: 'var(--gray-100)',   fg: 'var(--text-default)', dot: 'var(--gray-500)' },
  primary:     { bg: 'var(--primary-50)', fg: 'var(--primary-700)',  dot: 'var(--primary-500)' },
  positive:    { bg: 'var(--green-50)',   fg: 'var(--green-600)',    dot: 'var(--green-500)' },
  negative:    { bg: 'var(--red-50)',     fg: 'var(--red-600)',      dot: 'var(--red-500)' },
  notice:      { bg: 'var(--orange-50)',  fg: 'var(--orange-600)',   dot: 'var(--orange-500)' },
  informative: { bg: 'var(--blue-50)',    fg: 'var(--blue-600)',     dot: 'var(--blue-500)' },
};

const SOLID = {
  neutral: 'var(--gray-500)', primary: 'var(--primary-600)', positive: 'var(--green-500)',
  negative: 'var(--red-500)', notice: 'var(--orange-500)', informative: 'var(--blue-500)',
};

/**
 * Badge — status pill for transaction/account states. Tones map to the
 * semantic color system; supports a leading dot or icon, subtle or solid fill.
 */
export function Badge({ children, tone = 'neutral', variant = 'subtle', dot = false, icon, size = 'M', style = {} }) {
  const t = TONES[tone] || TONES.neutral;
  const solid = variant === 'solid';
  const h = size === 'S' ? 18 : 22;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      height: h, padding: `0 ${size === 'S' ? 6 : 8}px`,
      borderRadius: 'var(--radius-full)',
      background: solid ? SOLID[tone] : t.bg,
      color: solid ? '#fff' : t.fg,
      fontFamily: 'var(--font-sans)', fontSize: size === 'S' ? 11 : 12,
      fontWeight: 'var(--weight-medium)', lineHeight: 1, whiteSpace: 'nowrap',
      ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: solid ? '#fff' : t.dot, flex: 'none' }} />}
      {icon && <Icon name={icon} size={size === 'S' ? 12 : 14} />}
      {children}
    </span>
  );
}
