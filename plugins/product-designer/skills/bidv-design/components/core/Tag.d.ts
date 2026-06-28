import * as React from 'react';
import { IconName } from './Icon';

export interface TagProps {
  /** Leading Fluent icon. */
  icon?: IconName;
  /** Show a dismiss "×" and handle removal. */
  onDismiss?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Selected/active styling. */
  selected?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Removable keyword / filter chip.
 *
 * @dsCard group="Components"
 */
export function Tag(props: TagProps): JSX.Element;
