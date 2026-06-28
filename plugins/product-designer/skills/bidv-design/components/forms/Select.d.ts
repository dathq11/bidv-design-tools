import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps {
  label?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  /** Array of `{ value, label }` or plain strings. */
  options: Array<SelectOption | string>;
  placeholder?: string;
  helperText?: React.ReactNode;
  error?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  size?: 'L' | 'M' | 'S';
  style?: React.CSSProperties;
}

/**
 * Dropdown picker styled to the DS (custom popover, not native select).
 *
 * @dsCard group="Components"
 */
export function Select(props: SelectProps): JSX.Element;
