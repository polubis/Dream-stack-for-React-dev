import type { LayoutProps } from '@system/figa-ui';
import type { ReactNode } from 'react';

type MainLayoutProps = Pick<LayoutProps, 'sidebar'> & {
  children: ReactNode;
}

export type { MainLayoutProps };
