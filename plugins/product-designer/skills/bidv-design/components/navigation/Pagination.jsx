import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Pagination — page navigation for tables. Shows page numbers with ellipsis.
 */
export function Pagination({ page = 1, pageCount = 1, onChange, style = {} }) {
  const go = p => { if (p >= 1 && p <= pageCount && p !== page) onChange && onChange(p); };
  const pages = [];
  const add = p => pages.push(p);
  if (pageCount <= 7) { for (let i = 1; i <= pageCount; i++) add(i); }
  else {
    add(1);
    if (page > 3) add('…');
    for (let i = Math.max(2, page - 1); i <= Math.min(pageCount - 1, page + 1); i++) add(i);
    if (page < pageCount - 2) add('…');
    add(pageCount);
  }

  const cell = (active, dim) => ({
    minWidth: 32, height: 32, padding: '0 6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    border: `1px solid ${active ? 'var(--primary-600)' : 'var(--border-subtle)'}`,
    borderRadius: 'var(--radius-control)', background: active ? 'var(--primary-600)' : 'var(--surface-high)',
    color: active ? '#fff' : dim ? 'var(--text-lowest)' : 'var(--text-default)',
    fontSize: 13, fontWeight: 'var(--weight-medium)', cursor: dim ? 'default' : 'pointer',
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, ...style }}>
      <button type="button" onClick={() => go(page - 1)} disabled={page <= 1} style={{ ...cell(false, page <= 1), border: '1px solid var(--border-subtle)' }}>
        <Icon name="chevron-left" size={16} />
      </button>
      {pages.map((p, i) => p === '…'
        ? <span key={'e' + i} style={{ ...cell(false, true), border: 'none' }}>…</span>
        : <button key={p} type="button" onClick={() => go(p)} style={cell(p === page, false)}>{p}</button>
      )}
      <button type="button" onClick={() => go(page + 1)} disabled={page >= pageCount} style={{ ...cell(false, page >= pageCount), border: '1px solid var(--border-subtle)' }}>
        <Icon name="chevron-right" size={16} />
      </button>
    </div>
  );
}
