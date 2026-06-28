import * as React from 'react';

export interface AvatarProps {
  /** Display name — used for initials fallback and tint. */
  name?: string;
  /** Image URL; falls back to initials when absent. */
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | number;
  /** Presence dot. */
  presence?: 'online' | 'busy' | 'offline';
  /** Rounded-square instead of circle. */
  square?: boolean;
  style?: React.CSSProperties;
}

/**
 * User / entity avatar with initials fallback and presence.
 *
 * @dsCard group="Components"
 */
export function Avatar(props: AvatarProps): JSX.Element;
