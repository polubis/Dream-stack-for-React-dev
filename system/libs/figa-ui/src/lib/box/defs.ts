import type { ReactNode } from 'react';
import type { SpacingKey } from '../theme-provider';

type BoxOrientation = 'row' | 'column' | 'center-row' | 'center-column';
type BoxVariant = 'outlined' | 'filled' | 'empty';
type BoxPadding = [SpacingKey, SpacingKey, SpacingKey, SpacingKey];
type BoxSpacing = SpacingKey[];
type BoxMarginValue = 'auto' | SpacingKey;
type BoxMargin =
  | 'auto'
  | [BoxMarginValue, BoxMarginValue]
  | [BoxMarginValue, BoxMarginValue, BoxMarginValue, BoxMarginValue];

interface BoxProps {
  className?: string;
  children: ReactNode;
  orientation?: BoxOrientation;
  variant?: BoxVariant;
  padding?: BoxPadding;
  spacing?: BoxSpacing;
  margin?: BoxMargin;
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
