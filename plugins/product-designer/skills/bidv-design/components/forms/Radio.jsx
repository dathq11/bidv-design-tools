import React from 'react';

/**
 * Radio — single option in a group. Use RadioGroup to manage selection.
 */
export function Radio({ checked = false, onChange, label, value, name, disabled = false, style = {} }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(value)}
        style={{
          width: 18, height: 18, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '50%', background: 'var(--surface-high)',
          border: `1.5px solid ${checked ? 'var(--primary-600)' : 'var(--border-default)'}`,
          transition: 'border-color var(--dur-fast)',
        }}
      >
        {checked && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary-600)' }} />}
      </span>
      {label && <span style={{ fontSize: 14, color: 'var(--text-default)' }}>{label}</span>}
    </label>
  );
}

/**
 * RadioGroup — manages a set of radios. options = [{ value, label }] or strings.
 */
export function RadioGroup({ value, onChange, options = [], name = 'radio-group', direction = 'column', gap = 10, disabled = false, style = {} }) {
  const norm = options.map(o => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap, ...style }}>
      {norm.map(o => (
        <Radio key={o.value} name={name} value={o.value} label={o.label}
          checked={value === o.value} onChange={onChange} disabled={disabled || o.disabled} />
      ))}
    </div>
  );
}
