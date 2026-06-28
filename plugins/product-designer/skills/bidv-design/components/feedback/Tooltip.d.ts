import * as React from 'react';

export interface TooltipProps {
  label: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Hover tooltip bubble. Wrap any element (commonly an IconButton).
 *
 * @dsCard group="Components"
 */
export function Tooltip(props: TooltipProps): JSX.Element;
