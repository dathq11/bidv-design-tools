import React from 'react';

/**
 * Card — surface container for grouped content (panels, stat tiles, list sections).
 */
export function Card({ children, padding = 16, elevated = false, interactive = false, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        background: 'var(--surface-high)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)',
        padding,
        boxShadow: elevated ? 'var(--shadow-sm)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
        ...(interactive && hover ? { boxShadow: 'var(--shadow-md)', borderColor: 'var(--primary-200)', cursor: 'pointer' } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Optional card header row with title + actions. */
export function CardHeader({ title, subtitle, actions, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 12, ...style }}>
      <div>
        <div style={{ fontSize: 16, fontWeight: 'var(--weight-medium)', letterSpacing: '0.15px', color: 'var(--text-default)' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: 'var(--text-low)', marginTop: 2 }}>{subtitle}</div>}
      </div>
      {actions}
    </div>
  );
}
