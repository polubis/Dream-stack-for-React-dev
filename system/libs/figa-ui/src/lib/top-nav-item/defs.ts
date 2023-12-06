import type { ButtonProps } from '../button';

interface TopNavItemProps extends Omit<ButtonProps, 'variant' | 'motive'> {
  active?: boolean;
}

export type { TopNavItemProps };
