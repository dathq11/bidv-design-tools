import * as React from 'react';

export interface ToastProps {
  tone?: 'positive' | 'negative' | 'notice' | 'informative';
  title?: React.ReactNode;
  message?: React.ReactNode;
  onClose?: () => void;
  /** Optional action node (e.g. an "Undo" button). */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface ToastStackProps {
  children?: React.ReactNode;
  position?: 'bottom-right' | 'top-right' | 'top-center';
}

/**
 * Transient notification with a tone accent bar. ToastStack positions a list.
 *
 * @dsCard group="Components"
 */
export function Toast(props: ToastProps): JSX.Element;
export function ToastStack(props: ToastStackProps): JSX.Element;
