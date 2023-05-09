import type { ReactNode } from 'react';
import { FONT_VARIANTS } from './consts';

type FontVariant = (typeof FONT_VARIANTS)[number];

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
  | 'i';

type VariantElementMap = Record<FontVariant, SupportedFontElement>;

interface FontProps {
  className?: string;
  element?: SupportedFontElement;
  variant: FontVariant;
  children: ReactNode;
}

export type { FontProps, FontVariant, SupportedFontElement, VariantElementMap };
