import * as React from 'react';

export interface BreadcrumbItem { label: React.ReactNode; href?: string; }

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  style?: React.CSSProperties;
}

export interface PageHeaderProps {
  title: React.ReactNode;
  breadcrumb?: BreadcrumbItem[];
  subtitle?: React.ReactNode;
  /** Right-aligned action buttons. */
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Page header block: breadcrumb + title + subtitle + actions. Includes Breadcrumb.
 */
export function PageHeader(props: PageHeaderProps): JSX.Element;
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
