import type { ReactNode } from 'react';

interface NavigationProps {
  className?: string;
  logo: ReactNode;
  action: ReactNode;
  links: ReactNode[];
}

export type { NavigationProps };
