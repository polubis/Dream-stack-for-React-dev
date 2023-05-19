import type { ReactNode } from 'react';
import type { SpacingKey } from '../theme-provider';

type BoxOrientation = 'row' | 'column' | 'center-row' | 'center-column';
type BoxVariant = 'outlined' | 'filled' | 'empty';
type BoxPadding = [SpacingKey, SpacingKey, SpacingKey, SpacingKey];
type BoxSpacing = SpacingKey[];

interface BoxProps {
  className?: string;
  children: ReactNode;
  orientation?: BoxOrientation;
  variant?: BoxVariant;
  padding?: BoxPadding;
  spacing?: BoxSpacing;
}

export type { BoxOrientation, BoxVariant, BoxSpacing, BoxPadding, BoxProps };
