import React from 'react';

/**
 * Tooltip — hover label. Wraps a child; shows a small dark bubble on hover.
 */
export function Tooltip({ label, placement = 'top', children, style = {} }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 6 },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 6 },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 6 },
  }[placement];
  return (
    <span
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      style={{ position: 'relative', display: 'inline-flex', ...style }}
    >
      {children}
      {show && label && (
        <span role="tooltip" style={{
          position: 'absolute', zIndex: 1200, ...pos, whiteSpace: 'nowrap',
          background: 'var(--gray-900)', color: '#fff', fontFamily: 'var(--font-sans)',
          fontSize: 12, lineHeight: '16px', padding: '5px 8px', borderRadius: 'var(--radius-4)',
          boxShadow: 'var(--shadow-md)', pointerEvents: 'none',
        }}>{label}</span>
      )}
    </span>
  );
}
