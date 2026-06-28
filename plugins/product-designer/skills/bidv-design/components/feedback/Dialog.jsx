import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Dialog — modal overlay. Header (title + close), body (children), footer (actions).
 */
export function Dialog({ open, onClose, title, children, footer, width = 480, tone, icon, style = {} }) {
  if (!open) return null;
  const toneColor = tone === 'negative' ? 'var(--red-500)' : tone === 'notice' ? 'var(--orange-500)' : tone === 'positive' ? 'var(--green-500)' : 'var(--primary-600)';
  const toneBg = tone === 'negative' ? 'var(--red-50)' : tone === 'notice' ? 'var(--orange-50)' : tone === 'positive' ? 'var(--green-50)' : 'var(--primary-50)';
  return (
    <div
      onMouseDown={e => { if (e.target === e.currentTarget) onClose && onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'var(--surface-overlay)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, backdropFilter: 'blur(1px)' }}
    >
      <div role="dialog" aria-modal="true" style={{
        width, maxWidth: '100%', maxHeight: '90vh', display: 'flex', flexDirection: 'column',
        background: 'var(--surface-high)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-2xl)', overflow: 'hidden', ...style,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 16px 12px 20px' }}>
          {icon && <span style={{ flex: 'none', width: 36, height: 36, borderRadius: 'var(--radius-8)', background: toneBg, color: toneColor, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={20} /></span>}
          <h2 style={{ flex: 1, margin: 0, fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 'var(--weight-semibold)', lineHeight: '26px', color: 'var(--text-default)', paddingTop: icon ? 5 : 0 }}>{title}</h2>
          <button type="button" onClick={onClose} aria-label="Đóng" style={{ flex: 'none', display: 'inline-flex', padding: 6, border: 'none', background: 'transparent', borderRadius: 'var(--radius-8)', cursor: 'pointer', color: 'var(--fg-low)' }}>
            <Icon name="dismiss" size={20} />
          </button>
        </div>
        <div style={{ padding: '0 20px 8px', overflowY: 'auto', fontSize: 14, color: 'var(--text-low)', lineHeight: '20px' }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '16px 20px', borderTop: '1px solid var(--border-subtle)', marginTop: 8 }}>{footer}</div>}
      </div>
    </div>
  );
}
