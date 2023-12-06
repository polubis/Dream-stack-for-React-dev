import type { ReactNode } from 'react';

interface BottomNavItemProps {
  className?: string;
  text: string;
  icon: ReactNode;
  active?: boolean;
}

export type { BottomNavItemProps };
