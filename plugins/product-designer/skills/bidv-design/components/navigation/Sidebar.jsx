import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Sidebar — app navigation rail. items = [{ id, label, icon, badge?, children? }].
 * Collapsible; renders the BIDV mark when collapsed.
 */
export function Sidebar({
  items = [], active, onSelect, collapsed = false, onToggleCollapse,
  logoSrc, markSrc, footer, style = {},
}) {
  const [openGroups, setOpenGroups] = React.useState(() => {
    const o = {};
    items.forEach(it => { if (it.children && it.children.some(c => c.id === active)) o[it.id] = true; });
    return o;
  });
  const w = collapsed ? 'var(--layout-sidebar-collapsed-w)' : 'var(--layout-sidebar-w)';

  function Row({ it, child }) {
    const isActive = it.id === active;
    const hasChildren = it.children && it.children.length;
    const open = openGroups[it.id];
    const [hover, setHover] = React.useState(false);
    return (
      <button
        type="button"
        onClick={() => hasChildren ? setOpenGroups(g => ({ ...g, [it.id]: !g[it.id] })) : onSelect && onSelect(it.id)}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        title={collapsed ? it.label : undefined}
        style={{
          position: 'relative', display: 'flex', alignItems: 'center', gap: 12, width: '100%',
          height: 40, padding: collapsed ? 0 : `0 ${child ? 12 : 10}px 0 ${child ? 40 : 10}px`,
          justifyContent: collapsed ? 'center' : 'flex-start',
          border: 'none', borderRadius: 'var(--radius-8)', cursor: 'pointer', textAlign: 'left',
          background: isActive ? 'var(--white-a20)' : hover ? 'var(--white-a10)' : 'transparent',
          color: isActive ? '#fff' : 'var(--white-a80)',
          fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: isActive ? 'var(--weight-medium)' : 'var(--weight-regular)',
          transition: 'background var(--dur-fast)',
        }}
      >
        {isActive && !child && <span style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 3, borderRadius: '0 3px 3px 0', background: '#fff' }} />}
        {it.icon && <Icon name={it.icon} size={20} color={isActive ? '#fff' : 'var(--white-a80)'} />}
        {!collapsed && <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.label}</span>}
        {!collapsed && it.badge != null && (
          <span style={{ minWidth: 18, height: 18, padding: '0 5px', borderRadius: 'var(--radius-full)', background: 'var(--red-500)', color: '#fff', fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{it.badge}</span>
        )}
        {!collapsed && hasChildren && <Icon name="chevron-down" size={16} color="var(--white-a80)" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast)' }} />}
      </button>
    );
  }

  return (
    <aside style={{
      width: w, flex: 'none', height: '100%', display: 'flex', flexDirection: 'column',
      background: 'var(--primary-700)', borderRight: '1px solid var(--white-a10)',
      transition: 'width var(--dur-base) var(--ease-standard)', ...style,
    }}>
      <div style={{ height: 'var(--layout-topnav-h)', display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'space-between', padding: collapsed ? 0 : '0 12px 0 16px', borderBottom: '1px solid var(--white-a10)', flex: 'none' }}>
        {collapsed
          ? (markSrc && <img src={markSrc} alt="BIDV" style={{ height: 28 }} />)
          : (logoSrc && <img src={logoSrc} alt="BIDV" style={{ height: 26 }} />)}
        {!collapsed && onToggleCollapse && (
          <button type="button" onClick={onToggleCollapse} aria-label="Thu gọn" style={{ display: 'inline-flex', padding: 6, border: 'none', background: 'transparent', borderRadius: 'var(--radius-8)', cursor: 'pointer', color: 'var(--white-a80)' }}>
            <Icon name="chevron-left" size={18} />
          </button>
        )}
      </div>
      <nav style={{ flex: 1, overflowY: 'auto', padding: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => (
          <div key={it.id}>
            <Row it={it} />
            {!collapsed && it.children && openGroups[it.id] && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
                {it.children.map(c => <Row key={c.id} it={c} child />)}
              </div>
            )}
          </div>
        ))}
      </nav>
      {footer && <div style={{ padding: 8, borderTop: '1px solid var(--white-a10)', flex: 'none' }}>{footer}</div>}
    </aside>
  );
}
