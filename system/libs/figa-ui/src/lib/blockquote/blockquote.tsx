import { Font } from '../font';
import type { BlockquoteProps } from './defs';

import c from 'classnames';

const Blockquote = ({ children, className, variant }: BlockquoteProps) => {
  return (
    <blockquote className={c('blockquote', className, variant)}>
      <Font variant={variant}>{children}</Font>
    </blockquote>
  );
};

export { Blockquote };
