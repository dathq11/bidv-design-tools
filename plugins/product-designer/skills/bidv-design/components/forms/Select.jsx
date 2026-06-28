import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Select — dropdown picker. Lightweight custom popover styled to the DS;
 * options = [{ value, label }] or strings.
 */
export function Select({
  label, value, onChange, options = [], placeholder = 'Chọn...', helperText, error,
  disabled = false, required = false, size = 'M', style = {},
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const h = size === 'L' ? 40 : size === 'S' ? 28 : 32;
  const norm = options.map(o => (typeof o === 'string' ? { value: o, label: o } : o));
  const current = norm.find(o => o.value === value);

  React.useEffect(() => {
    function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const borderColor = error ? 'var(--border-error)' : open ? 'var(--border-active)' : 'var(--border-default)';

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'relative', ...style }}>
      {label && (
        <span style={{ fontSize: 14, fontWeight: 'var(--weight-medium)', color: 'var(--text-default)', letterSpacing: '0.1px' }}>
          {label}{required && <span style={{ color: 'var(--red-500)', marginLeft: 2 }}>*</span>}
        </span>
      )}
      <button
        type="button" disabled={disabled} onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          height: h, padding: '0 10px 0 12px', width: '100%',
          background: disabled ? 'var(--surface-disabled)' : 'var(--surface-high)',
          border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-control)',
          boxShadow: open && !error ? 'var(--focus-ring)' : 'none',
          fontFamily: 'var(--font-sans)', fontSize: size === 'S' ? 13 : 14, cursor: disabled ? 'not-allowed' : 'pointer',
          color: current ? 'var(--text-default)' : 'var(--text-lowest)', transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{current ? current.label : placeholder}</span>
        <Icon name="chevron-down" size={18} color="var(--fg-low)" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast)' }} />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: `calc(100% + 4px)`, left: 0, right: 0, zIndex: 50,
          background: 'var(--surface-high)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-8)', boxShadow: 'var(--shadow-md)', padding: 4, maxHeight: 260, overflowY: 'auto',
        }}>
          {norm.map(o => {
            const sel = o.value === value;
            return (
              <div
                key={o.value} onClick={() => { onChange && onChange(o.value); setOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
                  padding: '7px 10px', borderRadius: 'var(--radius-4)', cursor: 'pointer',
                  fontSize: 14, color: 'var(--text-default)',
                  background: sel ? 'var(--primary-50)' : 'transparent',
                }}
                onMouseEnter={e => { if (!sel) e.currentTarget.style.background = 'var(--gray-50)'; }}
                onMouseLeave={e => { if (!sel) e.currentTarget.style.background = 'transparent'; }}
              >
                {o.label}
                {sel && <Icon name="checkmark" size={16} color="var(--primary-600)" />}
              </div>
            );
          })}
        </div>
      )}
      {(helperText || error) && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: error ? 'var(--text-negative)' : 'var(--text-low)' }}>
          {error && <Icon name="error" size={14} />}{error || helperText}
        </span>
      )}
    </div>
  );
}
