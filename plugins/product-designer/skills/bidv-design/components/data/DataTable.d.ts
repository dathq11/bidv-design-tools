import * as React from 'react';

export interface Column<Row = any> {
  key: string;
  header: React.ReactNode;
  width?: number | string;
  align?: 'left' | 'right' | 'center';
  sortable?: boolean;
  /** Allow wrapping in cell (default nowrap). */
  wrap?: boolean;
  /** Custom cell renderer. */
  render?: (row: Row) => React.ReactNode;
}

export interface SortState { key: string; dir: 'asc' | 'desc'; }

export interface DataTableProps<Row = any> {
  columns: Column<Row>[];
  data: Row[];
  /** Field name or function returning a unique row key. Default "id". */
  rowKey?: string | ((row: Row) => string | number);
  selectable?: boolean;
  selected?: Array<string | number>;
  onSelectChange?: (keys: Array<string | number>) => void;
  sort?: SortState;
  onSortChange?: (sort: SortState) => void;
  zebra?: boolean;
  dense?: boolean;
  onRowClick?: (row: Row) => void;
  emptyText?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Dense data table with selection, sorting, and custom cell renderers —
 * the workhorse of every back-office list view.
 */
export function DataTable<Row = any>(props: DataTableProps<Row>): JSX.Element;
