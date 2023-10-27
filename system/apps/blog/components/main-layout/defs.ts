import type { LayoutProps, NavBarProps } from '@system/figa-ui';
import type { ReactNode } from 'react';

interface MainLayoutProps
  extends Pick<LayoutProps, 'sidebar' | 'offPadding'>,
    Pick<NavBarProps, 'sticky'> {
  children: ReactNode;
}

export type { MainLayoutProps };
