import { type CSSProperties, Children, isValidElement, useMemo } from 'react';
import { tokens } from '../theme-provider';
import type { BoxProps, BoxMarginValue } from './defs';

import c from 'classnames';

const toCSSSpacingProp = (spacing: BoxMarginValue[]): string =>
  spacing
    .map((space) => (space === 'auto' ? 'auto' : tokens.spacing[space]))
    .join(' ');

const Box = ({
  className,
  children,
  orientation = 'column',
  variant = 'empty',
  padding,
  margin,
  spacing,
  maxWidth,
}: BoxProps) => {
  const cachedPadding = useMemo(
    () => (padding ? toCSSSpacingProp(padding) : undefined),
    []
  );

  const cachedMargin = useMemo(() => {
    if (Array.isArray(margin)) {
      return toCSSSpacingProp(margin);
    }

    return margin;
  }, []);

  const enhancedChildren = Array.isArray(spacing)
    ? Children.map(children, (child, idx) => {
        if (!isValidElement(child)) {
          return null;
        }

        const isColumnOrientation =
          orientation === 'column' || orientation === 'center-column';

        const style: CSSProperties = {
          [isColumnOrientation ? 'marginBottom' : 'marginRight']:
            tokens.spacing[spacing[idx]],
        };

        return (
          <div className="box-item-wrapper" style={style}>
            {child}
          </div>
        );
      })
    : children;

  return (
    <div
      className={c('box', className, orientation, variant)}
      style={{
        padding: cachedPadding,
        margin: cachedMargin,
        maxWidth,
      }}
    >
      {enhancedChildren}
    </div>
  );
};

export { Box };
