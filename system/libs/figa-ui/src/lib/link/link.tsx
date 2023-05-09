import type { LinkProps } from './defs';

import c from 'classnames';
import { Font } from '../font';

const Link = ({ className, variant, children }: LinkProps) => {
  return (
    <Font className={c('link', className)} variant={variant} element="span">
      {children}
    </Font>
  );
};

export { Link };
