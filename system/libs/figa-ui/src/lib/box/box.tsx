import { Children, cloneElement, isValidElement } from 'react';
import { tokens } from '../theme-provider';
import type { BoxProps } from './defs';

import c from 'classnames';

const Box = ({
  className,
  children,
  orientation = 'column',
  variant = 'empty',
  padding = [350, 250, 350, 250],
  spacing,
}: BoxProps) => {
  const enhancedChildren = Array.isArray(spacing)
    ? Children.map(children, (child, idx) => {
        if (!isValidElement(child)) {
          return null;
        }

        return (
          <div
            className="box-item-wrapper"
            style={{ marginBottom: tokens.spacing[spacing[idx]] }}
          >
            {child}
          </div>
        );
      })
    : children;

  return (
    <div
      className={c('box', className, orientation, variant)}
      style={{
        padding: padding.map((space) => tokens.spacing[space]).join(' '),
      }}
    >
      {enhancedChildren}
    </div>
  );
};

export { Box };
