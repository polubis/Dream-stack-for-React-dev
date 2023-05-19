import type { ReactNode } from 'react';

interface LayoutProps {
  className?: string;
  children: ReactNode;
  header: ReactNode;
  full?: boolean;
  footer?: ReactNode;
}

export type { LayoutProps };
