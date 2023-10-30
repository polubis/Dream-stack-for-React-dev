import type { BoxProps } from '@system/figa-ui';
import type { ReactNode } from 'react';

interface InfoSectionProps {
  title: ReactNode;
  description: ReactNode;
  footer?: ReactNode;
  padding?: BoxProps['padding'];
}

export type { InfoSectionProps };
