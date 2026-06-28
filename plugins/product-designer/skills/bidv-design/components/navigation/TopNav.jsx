import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Avatar } from '../core/Avatar.jsx';

/**
 * TopNav — application top bar: leading slot (menu/logo), global search,
 * utility icons, and a user cluster.
 */
export function TopNav({
  onMenu, logoSrc, title, searchPlaceholder = 'Tìm kiếm giao dịch, tài khoản...',
  onSearch, notifications, user, right, style = {},
}) {
  const [q, setQ] = React.useState('');
  return (
    <header style={{
      height: 'var(--layout-topnav-h)', flex: 'none', display: 'flex', alignItems: 'center', gap: 16,
      padding: '0 16px', background: 'var(--surface-high)', borderBottom: '1px solid var(--border-subtle)', ...style,
    }}>
      {onMenu && (
        <button type="button" onClick={onMenu} aria-label="Menu" style={{ display: 'inline-flex', padding: 8, border: 'none', background: 'transparent', borderRadius: 'var(--radius-8)', cursor: 'pointer', color: 'var(--fg-low)' }}>
          <Icon name="grid" size={20} />
        </button>
      )}
      {logoSrc && <img src={logoSrc} alt="BIDV" style={{ height: 24, flex: 'none' }} />}
      {title && <span style={{ fontSize: 16, fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>{title}</span>}

      <div style={{ flex: 1, maxWidth: 480, display: 'flex', alignItems: 'center', gap: 8, height: 36, padding: '0 12px', background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-8)' }}>
        <Icon name="search" size={18} color="var(--fg-low)" />
        <input
          value={q} placeholder={searchPlaceholder}
          onChange={e => { setQ(e.target.value); onSearch && onSearch(e.target.value); }}
          style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-default)' }}
        />
      </div>

      <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
        {right}
        <button type="button" aria-label="Thông báo" style={{ position: 'relative', display: 'inline-flex', padding: 8, border: 'none', background: 'transparent', borderRadius: 'var(--radius-8)', cursor: 'pointer', color: 'var(--fg-low)' }}>
          <Icon name="alert" size={20} />
          {notifications > 0 && (
            <span style={{ position: 'absolute', top: 4, right: 4, minWidth: 16, height: 16, padding: '0 4px', borderRadius: 'var(--radius-full)', background: 'var(--red-500)', color: '#fff', fontSize: 10, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--surface-high)' }}>{notifications}</span>
          )}
        </button>
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px 4px 4px', marginLeft: 4, borderRadius: 'var(--radius-full)', cursor: 'pointer' }}>
            <Avatar name={user.name} src={user.avatar} size="sm" />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{ fontSize: 13, fontWeight: 'var(--weight-medium)', color: 'var(--text-default)' }}>{user.name}</span>
              {user.role && <span style={{ fontSize: 11, color: 'var(--text-low)' }}>{user.role}</span>}
            </div>
            <Icon name="chevron-down" size={16} color="var(--fg-low)" />
          </div>
        )}
      </div>
    </header>
  );
}
