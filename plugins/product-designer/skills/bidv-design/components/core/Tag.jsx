import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Tag — removable filter/keyword chip. Neutral by default; optional dismiss.
 */
export function Tag({ children, icon, onDismiss, selected = false, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 28, padding: `0 ${onDismiss ? 6 : 10}px 0 10px`,
        borderRadius: 'var(--radius-full)',
        background: selected ? 'var(--primary-50)' : 'var(--gray-50)',
        color: selected ? 'var(--primary-700)' : 'var(--text-default)',
        border: `1px solid ${selected ? 'var(--primary-200)' : 'var(--border-subtle)'}`,
        fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 'var(--weight-medium)',
        lineHeight: 1, whiteSpace: 'nowrap', cursor: 'default',
        ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={14} />}
      {children}
      {onDismiss && (
        <button
          type="button"
          aria-label="Remove"
          onClick={onDismiss}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 16, height: 16, marginLeft: 2, padding: 0, border: 'none',
            borderRadius: '50%', cursor: 'pointer',
            background: hover ? 'var(--black-a10)' : 'transparent', color: 'inherit',
          }}
        >
          <Icon name="dismiss" size={12} />
        </button>
      )}
    </span>
  );
}
