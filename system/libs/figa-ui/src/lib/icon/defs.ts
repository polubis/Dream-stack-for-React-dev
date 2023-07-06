import type { ReactNode } from 'react';

interface IconBaseProps {
  size?: number;
  className?: string;
  children: ReactNode;
}

type IconProps = Omit<IconBaseProps, 'children'>;

export type { IconBaseProps, IconProps };
