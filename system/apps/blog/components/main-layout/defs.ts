import type { LayoutProps } from '@system/figa-ui';
import type { ReactNode } from 'react';

interface MainLayoutProps extends Pick<LayoutProps, 'sidebar'> {
  children: ReactNode;
}

export type { MainLayoutProps };
