import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  size?: 'M' | 'S';
  style?: React.CSSProperties;
}

/**
 * On/off toggle for settings and preferences.
 *
 * @dsCard group="Components"
 */
export function Switch(props: SwitchProps): JSX.Element;
