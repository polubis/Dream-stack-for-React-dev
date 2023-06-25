import type { ReactNode } from 'react';
import type { AVATAR_SHAPES, AVATAR_SIZES } from './consts';

type ImageProps = Omit<AvatarProps, 'renderImage'>;

type RenderImage = (props: ImageProps) => ReactNode;

type AvatarSize = (typeof AVATAR_SIZES)[number];
type AvatarShape = (typeof AVATAR_SHAPES)[number];

interface AvatarProps {
  className?: string;
  loading?: HTMLImageElement['loading'];
  size?: AvatarSize;
  shape?: AvatarShape;
  alt: HTMLImageElement['alt'];
  src: string;
  renderImage?: RenderImage;
}

export type { AvatarProps, RenderImage, ImageProps, AvatarShape, AvatarSize };
