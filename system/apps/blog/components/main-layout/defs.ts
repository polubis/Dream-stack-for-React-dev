import type { LayoutProps } from '@system/figa-ui';
import type { ReactNode } from 'react';

interface MainLayoutProps extends Pick<LayoutProps, 'sidebar' | 'offPadding'> {
  children: ReactNode;
}

export type { MainLayoutProps };
