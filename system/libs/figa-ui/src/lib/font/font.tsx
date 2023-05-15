import type { FontProps, VariantElementMap } from './defs';

import { createElement } from 'react';
import c from 'classnames';

const FONT_VARIANT_ELEMENT_MAP: VariantElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  b1: 'span',
  b2: 'span',
};

const Font = ({ className, variant, children, element }: FontProps) => {
  return createElement(element ?? FONT_VARIANT_ELEMENT_MAP[variant], {
    className: c('font', `font-${variant}`, className),
    children,
  });
};

export { Font };