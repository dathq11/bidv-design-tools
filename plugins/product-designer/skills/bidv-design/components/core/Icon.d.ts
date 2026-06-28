import React from 'react';

declare module 'react' {
  interface IntrinsicElements {
    'iconify-icon': any;
  }
}

export type IconName =
  | 'chevron-down' | 'chevron-up' | 'chevron-right' | 'chevron-left'
  | 'dismiss' | 'dismiss-circle' | 'delete' | 'checkmark' | 'checkmark-circle'
  | 'edit' | 'save' | 'add' | 'download' | 'upload' | 'filter' | 'search'
  | 'info' | 'warning' | 'error' | 'calendar' | 'history' | 'person' | 'people'
  | 'options' | 'more-horizontal' | 'more-vertical' | 'settings' | 'home'
  | 'document' | 'money' | 'wallet' | 'building-bank' | 'arrow-swap'
  | 'data-bar' | 'sign-out' | 'alert' | 'grid' | 'copy' | 'eye' | 'print'
  | (string & {});

export interface IconProps {
  /** Curated short name (e.g. "chevron-down") or a full Iconify id (e.g. "fluent:edit-24-regular"). */
  name: IconName;
  /** Square size in px. Default 20. */
  size?: number;
  /** CSS color (defaults to currentColor). */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Fluent UI System Icon, rendered via the Iconify web component.
 * The Iconify script must be loaded on the page.
 */
export function Icon(props: IconProps): JSX.Element;

export const ICONS: Record<string, string>;
