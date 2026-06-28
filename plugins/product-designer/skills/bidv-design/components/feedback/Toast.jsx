import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  positive:    { icon: 'checkmark-circle', color: 'var(--green-500)', bar: 'var(--green-500)' },
  negative:    { icon: 'dismiss-circle',   color: 'var(--red-500)',   bar: 'var(--red-500)' },
  notice:      { icon: 'warning',          color: 'var(--orange-500)',bar: 'var(--orange-500)' },
  informative: { icon: 'info',             color: 'var(--blue-500)',  bar: 'var(--blue-500)' },
};

/**
 * Toast — transient inline notification. Use <Toast> for one, or compose a stack.
 */
export function Toast({ tone = 'informative', title, message, onClose, action, style = {} }) {
  const t = TONES[tone] || TONES.informative;
  return (
    <div role="status" style={{
      position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 12,
      width: 360, maxWidth: '100%', padding: '12px 12px 12px 16px',
      background: 'var(--surface-high)', borderRadius: 'var(--radius-8)',
      boxShadow: 'var(--shadow-lg)', overflow: 'hidden', ...style,
    }}>
      <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: t.bar }} />
      <Icon name={t.icon} size={20} color={t.color} style={{ marginTop: 1, flex: 'none' }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: 14, fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>{title}</div>}
        {message && <div style={{ fontSize: 13, color: 'var(--text-low)', marginTop: title ? 2 : 0, lineHeight: '18px' }}>{message}</div>}
        {action && <div style={{ marginTop: 8 }}>{action}</div>}
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Đóng" style={{ flex: 'none', display: 'inline-flex', padding: 4, border: 'none', background: 'transparent', borderRadius: 'var(--radius-4)', cursor: 'pointer', color: 'var(--fg-low)' }}>
          <Icon name="dismiss" size={16} />
        </button>
      )}
    </div>
  );
}

/** ToastStack — fixed positioning container for a list of toasts. */
export function ToastStack({ children, position = 'bottom-right' }) {
  const pos = {
    'bottom-right': { bottom: 24, right: 24, alignItems: 'flex-end' },
    'top-right': { top: 24, right: 24, alignItems: 'flex-end' },
    'top-center': { top: 24, left: '50%', transform: 'translateX(-50%)', alignItems: 'center' },
  }[position];
  return <div style={{ position: 'fixed', zIndex: 1100, display: 'flex', flexDirection: 'column', gap: 10, ...pos }}>{children}</div>;
}
