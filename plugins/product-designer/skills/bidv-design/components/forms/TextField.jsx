import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * TextField — labelled text input with supporting/error text and optional icons.
 */
export function TextField({
  label, value, onChange, placeholder, helperText, error, required = false,
  disabled = false, iconLeft, iconRight, type = 'text', size = 'M', style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'L' ? 40 : size === 'S' ? 28 : 32;
  const borderColor = error ? 'var(--border-error)' : focus ? 'var(--border-active)' : 'var(--border-default)';

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      {label && (
        <span style={{ fontSize: 14, fontWeight: 'var(--weight-medium)', color: 'var(--text-default)', letterSpacing: '0.1px' }}>
          {label}{required && <span style={{ color: 'var(--red-500)', marginLeft: 2 }}>*</span>}
        </span>
      )}
      <span style={{
        display: 'flex', alignItems: 'center', gap: 8, height: h, padding: '0 12px',
        background: disabled ? 'var(--surface-disabled)' : 'var(--surface-high)',
        border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-control)',
        boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {iconLeft && <Icon name={iconLeft} size={18} color="var(--fg-low)" />}
        <input
          type={type} value={value} placeholder={placeholder} disabled={disabled} required={required}
          onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, height: '100%', border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: size === 'S' ? 13 : 14, color: 'var(--text-default)',
          }}
          {...rest}
        />
        {iconRight && <Icon name={iconRight} size={18} color="var(--fg-low)" />}
      </span>
      {(helperText || error) && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: error ? 'var(--text-negative)' : 'var(--text-low)' }}>
          {error && <Icon name="error" size={14} />}
          {error || helperText}
        </span>
      )}
    </label>
  );
}
