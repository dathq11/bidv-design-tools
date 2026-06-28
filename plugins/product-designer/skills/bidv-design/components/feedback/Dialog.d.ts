import * as React from 'react';
import { IconName } from '../core/Icon';

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** Footer actions (buttons). */
  footer?: React.ReactNode;
  width?: number;
  /** Tints the header icon chip. */
  tone?: 'primary' | 'negative' | 'notice' | 'positive';
  /** Header icon (Fluent name). */
  icon?: IconName;
  style?: React.CSSProperties;
}

/**
 * Modal dialog with header, scrollable body, and footer actions.
 *
 * @dsCard group="Components"
 */
export function Dialog(props: DialogProps): JSX.Element | null;
