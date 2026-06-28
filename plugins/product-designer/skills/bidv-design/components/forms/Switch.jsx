import React from 'react';

/**
 * Switch — on/off toggle for settings.
 */
export function Switch({ checked = false, onChange, label, disabled = false, size = 'M', style = {} }) {
  const w = size === 'S' ? 32 : 40;
  const h = size === 'S' ? 18 : 22;
  const knob = h - 6;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          position: 'relative', width: w, height: h, flex: 'none', borderRadius: 'var(--radius-full)',
          background: checked ? 'var(--primary-600)' : 'var(--gray-300)',
          transition: 'background var(--dur-base) var(--ease-standard)',
        }}
      >
        <span style={{
          position: 'absolute', top: 3, left: checked ? w - knob - 3 : 3, width: knob, height: knob,
          borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-xs)',
          transition: 'left var(--dur-base) var(--ease-emphasized)',
        }} />
      </span>
      {label && <span style={{ fontSize: 14, color: 'var(--text-default)' }}>{label}</span>}
    </label>
  );
}
