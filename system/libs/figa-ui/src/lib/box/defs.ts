import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { SpacingKey } from '../theme-provider';

type BoxHTMLElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type BoxOrientation = 'row' | 'column';
type BoxVariant = 'outlined' | 'filled' | 'empty';
type BoxPadding = [SpacingKey, SpacingKey, SpacingKey, SpacingKey];
type BoxSpacing = SpacingKey[];
type BoxMarginValue = 'auto' | SpacingKey;
type BoxMargin =
  | 'auto'
  | [BoxMarginValue, BoxMarginValue]
  | [BoxMarginValue, BoxMarginValue, BoxMarginValue, BoxMarginValue];

interface BoxProps extends BoxHTMLElementProps {
  orientation?: BoxOrientation;
  variant?: BoxVariant;
  padding?: BoxPadding;
  spacing?: BoxSpacing;
  margin?: BoxMargin;
  right?: boolean;
  center?: boolean;
  between?: boolean;
  minWidth?: string;
  maxWidth?: string;
}

export type {
  BoxOrientation,
  BoxVariant,
  BoxSpacing,
  BoxMargin,
  BoxMarginValue,
  BoxPadding,
  BoxProps,
};
