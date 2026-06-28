import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Breadcrumb — navigation trail. items = [{ label, href? }]. Last is current.
 */
export function Breadcrumb({ items = [], style = {} }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            <a
              href={it.href || undefined}
              style={{
                fontSize: 13, color: last ? 'var(--text-default)' : 'var(--text-low)',
                fontWeight: last ? 'var(--weight-medium)' : 'var(--weight-regular)',
                textDecoration: 'none', cursor: last ? 'default' : 'pointer',
              }}
              onMouseEnter={e => { if (!last) e.currentTarget.style.color = 'var(--text-brand)'; }}
              onMouseLeave={e => { if (!last) e.currentTarget.style.color = 'var(--text-low)'; }}
            >
              {it.label}
            </a>
            {!last && <Icon name="chevron-right" size={14} color="var(--text-lowest)" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

/**
 * PageHeader — breadcrumb + title + optional subtitle and right-aligned actions.
 */
export function PageHeader({ title, breadcrumb, subtitle, actions, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 24, fontWeight: 'var(--weight-semibold)', lineHeight: '32px', color: 'var(--text-default)' }}>{title}</h1>
          {subtitle && <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--text-low)' }}>{subtitle}</p>}
        </div>
        {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none' }}>{actions}</div>}
      </div>
    </div>
  );
}
