import { Children, cloneElement, useMemo } from 'react';
import type {
  AvatarsProps,
  AvatarsSizeMap,
  MappedChildrenElement,
} from './defs';

import c from 'classnames';
import { Font } from '../font';
import { tokens } from '../theme-provider';

const SIZES: AvatarsSizeMap = {
  small: 400,
  medium: 600,
  big: 800,
};

const pxToNumber = (value: string): number => +value.replace('px', '');

const Avatars = ({
  className,
  children,
  to,
  size = 'medium',
  shape = 'rounded',
  ...props
}: AvatarsProps) => {
  const enhancedChildren = useMemo(() => {
    const avatarSize = tokens.spacing[SIZES[size]];

    const mappedChildren = Children.map(
      children,
      (child: MappedChildrenElement, idx) => (
        <div
          style={{
            transform: `translateX(-${idx * (pxToNumber(avatarSize) / 2)}px)`,
          }}
        >
          {cloneElement(child, { ...child.props, size, shape })}
        </div>
      )
    );

    const slicedChildren = mappedChildren.slice(0, to);
    const restCount = mappedChildren.length - slicedChildren.length;

    if (restCount <= 0) {
      return slicedChildren;
    }

    return [
      ...slicedChildren,
      <div
        className="avatars-rest-count"
        key="rest-count"
        style={{
          height: avatarSize,
          width: avatarSize,
          transform: `translateX(-${
            slicedChildren.length * (pxToNumber(avatarSize) / 2)
          }px)`,
        }}
      >
        <Font variant="b2">+{restCount}</Font>
      </div>,
    ];
  }, [children, to, size, shape]);

  return (
    <div className={c('avatars', className, shape)} {...props}>
      {enhancedChildren}
    </div>
  );
};

export { Avatars };
