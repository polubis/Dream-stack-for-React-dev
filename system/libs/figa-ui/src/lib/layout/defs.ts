import type { ToggleReturn } from '@system/figa-hooks';
import type { ReactNode } from 'react';

interface LayoutProps {
  className?: string;
  children: ReactNode;
  header: ReactNode;
  footer?: ReactNode;
  offPadding?: boolean;
  sidebar?: (toggler: ToggleReturn) => ReactNode;
}

export type { LayoutProps };
