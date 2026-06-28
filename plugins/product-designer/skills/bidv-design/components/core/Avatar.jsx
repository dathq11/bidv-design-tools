import React from 'react';

const SIZES = { xs: 24, sm: 32, md: 40, lg: 48 };

function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (!parts[0]) return '';
  // Vietnamese names: take last word + first word's first letters
  const a = parts[parts.length - 1][0] || '';
  const b = parts.length > 1 ? parts[0][0] : '';
  return (a + b).toUpperCase();
}

// Deterministic teal/neutral tint from the name
const TINTS = [
  ['var(--primary-100)', 'var(--primary-700)'],
  ['var(--blue-100)', 'var(--blue-600)'],
  ['var(--green-100)', 'var(--green-600)'],
  ['var(--secondary-100)', 'var(--secondary-700)'],
  ['var(--neutral-100)', 'var(--neutral-700)'],
];

/**
 * Avatar — user/entity identity. Image, initials fallback, optional presence dot.
 */
export function Avatar({ name = '', src, size = 'md', presence, square = false, style = {} }) {
  const px = SIZES[size] || size || 40;
  const tint = TINTS[(name.charCodeAt(0) || 0) % TINTS.length];
  return (
    <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', ...style }}>
      <span style={{
        width: px, height: px,
        borderRadius: square ? 'var(--radius-8)' : '50%',
        overflow: 'hidden', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: src ? 'var(--gray-100)' : tint[0],
        color: tint[1],
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
        fontSize: Math.round(px * 0.38), lineHeight: 1, userSelect: 'none',
      }}>
        {src
          ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : initials(name)}
      </span>
      {presence && (
        <span style={{
          position: 'absolute', right: 0, bottom: 0,
          width: Math.max(8, px * 0.26), height: Math.max(8, px * 0.26),
          borderRadius: '50%',
          background: presence === 'online' ? 'var(--green-500)' : presence === 'busy' ? 'var(--red-500)' : 'var(--gray-400)',
          border: '2px solid var(--surface-high)',
        }} />
      )}
    </span>
  );
}
