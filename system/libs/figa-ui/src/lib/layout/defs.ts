import type { ToggleReturn } from '@system/figa-hooks';
import type { ReactNode } from 'react';

type LayoutProps  ={
  className?: string;
  children: ReactNode;
  header: ReactNode;
  footer?: ReactNode;
  sidebar?: (toggler: ToggleReturn) => ReactNode;
}

export type { LayoutProps };
