import type { ReactNode } from 'react';
import type { FONT_MOTIVES, FONT_VARIANTS } from './consts';

type FontVariant = (typeof FONT_VARIANTS)[number];
type FontMotive = (typeof FONT_MOTIVES)[number];

type SupportedFontElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'b'
  | 'strong'
  | 'i'
  | 'p'
  | 'em';

type VariantElementMap = Record<FontVariant, SupportedFontElement>;

interface FontProps {
  className?: string;
  element?: SupportedFontElement;
  variant: FontVariant;
  children: ReactNode;
  italic?: boolean;
  motive?: FontMotive;
  bold?: boolean;
}

export type {
  FontProps,
  FontVariant,
  SupportedFontElement,
  VariantElementMap,
  FontMotive,
};
