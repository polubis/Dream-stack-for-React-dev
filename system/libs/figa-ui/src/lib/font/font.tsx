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
  b1: 'p',
  b2: 'p',
  b3: 'p',
};

const Font = ({
  className,
  variant,
  element,
  italic,
  motive = 'default',
  trim,
  bold,
  ...props
}: FontProps) => {
  return createElement(element ?? FONT_VARIANT_ELEMENT_MAP[variant], {
    className: c(
      'font',
      variant,
      motive,
      className,
      { italic },
      { bold },
      { trim }
    ),
    ...props,
  });
};

export { Font };
