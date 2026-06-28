import * as React from 'react';
import { IconName } from './Icon';

export interface BadgeProps {
  tone?: 'neutral' | 'primary' | 'positive' | 'negative' | 'notice' | 'informative';
  variant?: 'subtle' | 'solid';
  /** Leading status dot. */
  dot?: boolean;
  /** Leading Fluent icon. */
  icon?: IconName;
  size?: 'M' | 'S';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
