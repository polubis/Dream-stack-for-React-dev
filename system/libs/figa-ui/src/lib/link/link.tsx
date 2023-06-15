import type { LinkProps } from './defs';

import c from 'classnames';
import { Font } from '../font';

const Link = (props: LinkProps) => {
  return (
    <Font {...props} className={c('link', props.className)} element="span" />
  );
};

export { Link };
