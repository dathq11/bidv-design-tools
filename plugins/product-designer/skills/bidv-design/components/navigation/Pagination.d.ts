import * as React from 'react';

export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange?: (page: number) => void;
  style?: React.CSSProperties;
}

/**
 * Page navigation for data tables, with ellipsis for long ranges.
 *
 * @dsCard group="Components"
 */
export function Pagination(props: PaginationProps): JSX.Element;
