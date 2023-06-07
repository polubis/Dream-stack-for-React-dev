import type { ReactElement, ReactNode } from 'react';

interface ImageProps {
  className?: string;
  children: ReactElement<HTMLImageElement>;
  caption?: ReactNode;
}

export type { ImageProps };
