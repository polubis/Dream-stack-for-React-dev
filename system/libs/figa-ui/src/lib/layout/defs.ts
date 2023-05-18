import type { ReactNode } from 'react';

interface LayoutProps {
  className?: string;
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}

export type { LayoutProps };
