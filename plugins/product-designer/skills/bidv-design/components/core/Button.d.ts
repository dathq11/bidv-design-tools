import * as React from 'react';
import { IconName } from './Icon';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /** Visual emphasis. Default "filled". */
  variant?: 'filled' | 'outline' | 'transparent';
  /** Semantic color. Default "primary". */
  color?: 'primary' | 'gray' | 'negative';
  /** Control height. L=40 · M=32 · S=24. Default "M". */
  size?: 'L' | 'M' | 'S';
  /** Leading icon name. */
  iconLeft?: IconName;
  /** Trailing icon name. */
  iconRight?: IconName;
  /** Stretch to container width. */
  fullWidth?: boolean;
  disabled?: boolean;
}

/**
 * Primary action button for BIDV Back Office.
 */
export function Button(props: ButtonProps): JSX.Element;
