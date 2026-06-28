import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';

/**
 * DataTable — dense back-office table.
 * columns = [{ key, header, width, align, sortable, render(row) }]
 * Supports row selection, sort indicator, hover, sticky header, zebra optional.
 */
export function DataTable({
  columns = [], data = [], rowKey = 'id',
  selectable = false, selected = [], onSelectChange,
  sort, onSortChange, zebra = false, dense = false, onRowClick, emptyText = 'Không có dữ liệu', style = {},
}) {
  const keyOf = (row, i) => (typeof rowKey === 'function' ? rowKey(row) : row[rowKey]) ?? i;
  const allKeys = data.map(keyOf);
  const allSel = selectable && data.length > 0 && allKeys.every(k => selected.includes(k));
  const someSel = selectable && selected.length > 0 && !allSel;
  const rowH = dense ? 40 : 48;

  function toggleAll() {
    if (!onSelectChange) return;
    onSelectChange(allSel ? [] : allKeys);
  }
  function toggleRow(k) {
    if (!onSelectChange) return;
    onSelectChange(selected.includes(k) ? selected.filter(x => x !== k) : [...selected, k]);
  }
  function clickSort(col) {
    if (!col.sortable || !onSortChange) return;
    const dir = sort && sort.key === col.key && sort.dir === 'asc' ? 'desc' : 'asc';
    onSortChange({ key: col.key, dir });
  }

  return (
    <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)', overflow: 'hidden', background: 'var(--surface-high)', ...style }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)' }}>
          <thead>
            <tr style={{ background: 'var(--gray-50)' }}>
              {selectable && (
                <th style={{ width: 44, padding: '0 0 0 16px', height: 44, textAlign: 'left', borderBottom: '1px solid var(--border-subtle)' }}>
                  <Checkbox checked={allSel} indeterminate={someSel} onChange={toggleAll} />
                </th>
              )}
              {columns.map(col => {
                const active = sort && sort.key === col.key;
                return (
                  <th key={col.key}
                    onClick={() => clickSort(col)}
                    style={{
                      height: 44, padding: '0 16px', whiteSpace: 'nowrap',
                      textAlign: col.align || 'left', borderBottom: '1px solid var(--border-subtle)',
                      fontSize: 12, fontWeight: 'var(--weight-medium)', letterSpacing: '0.1px',
                      color: 'var(--text-low)', textTransform: 'uppercase', cursor: col.sortable ? 'pointer' : 'default',
                      userSelect: 'none', width: col.width,
                    }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, justifyContent: col.align === 'right' ? 'flex-end' : 'flex-start' }}>
                      {col.header}
                      {col.sortable && (
                        <Icon name={active ? (sort.dir === 'asc' ? 'chevron-up' : 'chevron-down') : 'chevron-down'}
                          size={14} color={active ? 'var(--primary-600)' : 'var(--gray-300)'} />
                      )}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr><td colSpan={columns.length + (selectable ? 1 : 0)} style={{ padding: '48px 16px', textAlign: 'center', color: 'var(--text-lowest)', fontSize: 14 }}>{emptyText}</td></tr>
            )}
            {data.map((row, i) => {
              const k = keyOf(row, i);
              const sel = selected.includes(k);
              return (
                <tr key={k}
                  onClick={() => onRowClick && onRowClick(row)}
                  style={{
                    height: rowH, background: sel ? 'var(--primary-50)' : zebra && i % 2 ? 'var(--gray-50)' : 'transparent',
                    cursor: onRowClick ? 'pointer' : 'default', transition: 'background var(--dur-fast)',
                  }}
                  onMouseEnter={e => { if (!sel) e.currentTarget.style.background = 'var(--gray-50)'; }}
                  onMouseLeave={e => { if (!sel) e.currentTarget.style.background = zebra && i % 2 ? 'var(--gray-50)' : 'transparent'; }}
                >
                  {selectable && (
                    <td style={{ padding: '0 0 0 16px', borderBottom: '1px solid var(--border-subtlest)' }} onClick={e => e.stopPropagation()}>
                      <Checkbox checked={sel} onChange={() => toggleRow(k)} />
                    </td>
                  )}
                  {columns.map(col => (
                    <td key={col.key} style={{
                      padding: '0 16px', borderBottom: '1px solid var(--border-subtlest)',
                      textAlign: col.align || 'left', fontSize: 14, color: 'var(--text-default)', whiteSpace: col.wrap ? 'normal' : 'nowrap',
                    }}>
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
