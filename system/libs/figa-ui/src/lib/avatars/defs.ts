import type { ReactElement, DetailedHTMLProps, HTMLAttributes } from 'react';
import type { AvatarShape, AvatarSize } from '../avatar/defs';
import type { SpacingKey } from '../theme-provider';

type AvatarsHTMLElementProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>;

type AvatarsProps  = AvatarsHTMLElementProps & {
  children: ReactElement<AvatarsProps> | ReactElement<AvatarsProps>[];
  to: number;
  size?: AvatarSize;
  shape?: AvatarShape;
}

type MappedChildrenElement = ReactElement<AvatarsProps>;

type AvatarsSizeMap = Record<AvatarSize, Extract<SpacingKey, 400 | 600 | 800>>;

export type {
  AvatarsProps,
  AvatarsSizeMap,
  AvatarsHTMLElementProps,
  MappedChildrenElement,
};
