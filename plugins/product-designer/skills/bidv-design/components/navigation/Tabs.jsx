import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Tabs — horizontal tab bar with active underline. Supports icon + count badge.
 * tabs = [{ id, label, icon?, count? }]
 */
export function Tabs({ tabs = [], value, onChange, style = {} }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-subtle)', ...style }}>
      {tabs.map(t => {
        const active = t.id === value;
        return (
          <button
            key={t.id} type="button" onClick={() => onChange && onChange(t.id)}
            style={{
              position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 6,
              height: 40, padding: '0 12px', border: 'none', background: 'transparent', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 'var(--weight-medium)', letterSpacing: '0.1px',
              color: active ? 'var(--primary-600)' : 'var(--text-low)',
              transition: 'color var(--dur-fast)',
            }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text-default)'; }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-low)'; }}
          >
            {t.icon && <Icon name={t.icon} size={18} />}
            {t.label}
            {t.count != null && (
              <span style={{
                minWidth: 18, height: 18, padding: '0 5px', borderRadius: 'var(--radius-full)',
                background: active ? 'var(--primary-100)' : 'var(--gray-100)',
                color: active ? 'var(--primary-700)' : 'var(--text-low)',
                fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>{t.count}</span>
            )}
            {active && <span style={{ position: 'absolute', left: 8, right: 8, bottom: -1, height: 2, background: 'var(--primary-600)', borderRadius: '2px 2px 0 0' }} />}
          </button>
        );
      })}
    </div>
  );
}
