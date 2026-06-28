import * as React from 'react';

export interface TopNavUser {
  name: string;
  role?: string;
  avatar?: string;
}

export interface TopNavProps {
  onMenu?: () => void;
  logoSrc?: string;
  title?: React.ReactNode;
  searchPlaceholder?: string;
  onSearch?: (q: string) => void;
  /** Notification count for the bell badge. */
  notifications?: number;
  user?: TopNavUser;
  /** Extra nodes before the bell. */
  right?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Application top bar: menu/logo, global search, notifications, user cluster.
 *
 * @dsCard group="Components"
 */
export function TopNav(props: TopNavProps): JSX.Element;
