import type { ReactNode } from 'react';
import type { ImageProps } from '../image';

interface ThumbnailProps extends ImageProps {
  img?: (props: Omit<ThumbnailProps, 'img'>) => ReactNode;
}

export type { ThumbnailProps };
