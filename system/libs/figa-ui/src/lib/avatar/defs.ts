import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import type { AVATAR_SHAPES, AVATAR_SIZES } from './consts';

type AvatarHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  'children'
>;

type AvatarSize = (typeof AVATAR_SIZES)[number];
type AvatarShape = (typeof AVATAR_SHAPES)[number];

type AvatarProps  = AvatarHTMLElementProps & {
  loading?: HTMLImageElement['loading'];
  size?: AvatarSize;
  shape?: AvatarShape;
  alt: HTMLImageElement['alt'];
  src: string;
  renderImage?: RenderImage;
}

type AvatarImageProps  = {
  loading?: AvatarProps['loading'];
  alt: AvatarProps['alt'];
  src: AvatarProps['src'];
  className?: string;
}

type RenderImage = (props: AvatarImageProps) => ReactNode;

export type {
  AvatarProps,
  RenderImage,
  AvatarImageProps,
  AvatarShape,
  AvatarSize,
  AvatarHTMLElementProps,
};
