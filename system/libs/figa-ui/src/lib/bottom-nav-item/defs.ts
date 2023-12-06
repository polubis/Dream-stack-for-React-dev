import type { ReactNode } from 'react';
import type { ButtonProps } from '../button';

interface BottomNavItemProps
  extends Omit<ButtonProps, 'children' | 'variant' | 'motive'> {
  text: string;
  icon: ReactNode;
  active?: boolean;
}

export type { BottomNavItemProps };
