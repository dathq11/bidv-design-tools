import * as React from 'react';
import { IconName } from '../core/Icon';

export interface SidebarItem {
  id: string;
  label: React.ReactNode;
  icon?: IconName;
  badge?: number | string;
  children?: SidebarItem[];
}

export interface SidebarProps {
  items: SidebarItem[];
  /** Active item id. */
  active?: string;
  onSelect?: (id: string) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  /** Full logo URL (expanded state). */
  logoSrc?: string;
  /** Mark-only URL (collapsed state). */
  markSrc?: string;
  /** Footer node (e.g. user card). */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Collapsible application navigation rail with nested groups and badges.
 */
export function Sidebar(props: SidebarProps): JSX.Element;
