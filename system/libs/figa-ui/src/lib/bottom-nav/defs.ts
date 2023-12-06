import type { ReactNode } from 'react';

interface BottomNavProps {
  className?: string;
  children: ReactNode;
}

interface BottomNavItemProps {
  className?: string;
  text: string;
  icon: ReactNode;
}

export type { BottomNavProps, BottomNavItemProps };
