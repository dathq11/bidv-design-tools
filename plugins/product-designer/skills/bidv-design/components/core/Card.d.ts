import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inner padding in px. Default 16. */
  padding?: number;
  /** Apply resting shadow. */
  elevated?: boolean;
  /** Hover affordance (lift + brand border). */
  interactive?: boolean;
  children?: React.ReactNode;
}

export interface CardHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Surface container for grouped content — panels, stat tiles, list sections.
 *
 * @dsCard group="Components"
 */
export function Card(props: CardProps): JSX.Element;
export function CardHeader(props: CardHeaderProps): JSX.Element;
