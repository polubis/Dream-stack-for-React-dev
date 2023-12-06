import type { ReactNode } from 'react';

interface BottomNavProps {
  className?: string;
  children: ReactNode;
}

interface BottomNavItemProps {
  className?: string;
  text: string;
  icon: ReactNode;
  active?: boolean;
}

export type { BottomNavProps, BottomNavItemProps };
