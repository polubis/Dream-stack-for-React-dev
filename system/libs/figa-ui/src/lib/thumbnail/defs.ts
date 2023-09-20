import type { ReactNode } from 'react';
import type { ImageProps } from '../image';

type ThumbnailProps = ImageProps & {
  img?: (props: Omit<ThumbnailProps, 'img'>) => ReactNode;
}

export type { ThumbnailProps };
