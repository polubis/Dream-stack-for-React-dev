import type { ReactNode } from 'react';

type FontVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b1' | 'b2';

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
  element?: SupportedFontElement;
  variant: FontVariant;
  children: ReactNode;
}

export type { FontProps, FontVariant, SupportedFontElement, VariantElementMap };
