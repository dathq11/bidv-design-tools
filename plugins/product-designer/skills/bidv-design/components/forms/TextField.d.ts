import * as React from 'react';
import { IconName } from '../core/Icon';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  /** Error message — also applies error styling. */
  error?: React.ReactNode;
  iconLeft?: IconName;
  iconRight?: IconName;
  size?: 'L' | 'M' | 'S';
  required?: boolean;
}

export function TextField(props: TextFieldProps): JSX.Element;
