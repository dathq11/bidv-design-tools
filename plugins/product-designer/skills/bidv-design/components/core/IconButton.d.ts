import * as React from 'react';
import { IconName } from './Icon';

export interface IconButtonProps {
  /** Fluent icon name. */
  icon: IconName;
  color?: 'gray' | 'primary' | 'negative';
  size?: 'L' | 'M' | 'S';
  variant?: 'transparent' | 'filled';
  /** `true` for a dot, or a number/string for a count badge. */
  badge?: boolean | number | string;
  disabled?: boolean;
  /** Accessible label (icon-only buttons need one). */
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Icon-only button for toolbars, table rows, and the top navigation.
 *
 * @dsCard group="Components"
 */
export function IconButton(props: IconButtonProps): JSX.Element;
