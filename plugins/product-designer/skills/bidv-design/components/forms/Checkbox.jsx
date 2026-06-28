import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Checkbox — boolean toggle with label. Supports indeterminate.
 */
export function Checkbox({ checked = false, indeterminate = false, onChange, label, disabled = false, style = {} }) {
  const on = checked || indeterminate;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 18, height: 18, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 'var(--radius-4)',
          background: on ? 'var(--primary-600)' : 'var(--surface-high)',
          border: `1.5px solid ${on ? 'var(--primary-600)' : 'var(--border-default)'}`,
          transition: 'background var(--dur-fast), border-color var(--dur-fast)',
        }}
      >
        {indeterminate
          ? <span style={{ width: 8, height: 2, background: '#fff', borderRadius: 1 }} />
          : checked && <Icon name="checkmark" size={14} color="#fff" />}
      </span>
      {label && <span style={{ fontSize: 14, color: 'var(--text-default)' }}>{label}</span>}
    </label>
  );
}
