import * as React from 'react';
import { IconName } from '../core/Icon';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  icon?: IconName;
  count?: number;
}

export interface TabsProps {
  tabs: TabItem[];
  value: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/**
 * Horizontal tab bar with active underline, optional icon and count badge.
 *
 * @dsCard group="Components"
 */
export function Tabs(props: TabsProps): JSX.Element;
