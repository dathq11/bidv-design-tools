import * as React from 'react';

export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string) => void;
  label?: React.ReactNode;
  value?: string;
  name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface RadioGroupProps {
  value?: string;
  onChange?: (value: string) => void;
  options: Array<{ value: string; label: string; disabled?: boolean } | string>;
  name?: string;
  direction?: 'row' | 'column';
  gap?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * Single-choice radio + group manager.
 *
 * @dsCard group="Components"
 */
export function Radio(props: RadioProps): JSX.Element;
export function RadioGroup(props: RadioGroupProps): JSX.Element;
