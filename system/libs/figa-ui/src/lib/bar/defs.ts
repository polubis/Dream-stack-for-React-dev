import type { ReactNode } from 'react';

interface BarProps {
  className?: string;
  children: ReactNode;
  top?: boolean;
  right?: boolean;
  hidden?: boolean;
}

export type { BarProps };
