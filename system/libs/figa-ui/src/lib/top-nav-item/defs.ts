import type { ButtonProps } from '../button';

interface TopNavItemProps
  extends Omit<ButtonProps, 'variant' | 'motive' | 'size'> {
  active?: boolean;
}

export type { TopNavItemProps };
