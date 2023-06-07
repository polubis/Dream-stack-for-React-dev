import { Font } from '../font';
import type { ImageProps } from './defs';

import c from 'classnames';

const Image = ({ className, children, caption }: ImageProps) => {
  return (
    <figure className={c('image', className)}>
      {children}
      {caption && (
        <Font className="image-caption" variant="b1">
          {caption}
        </Font>
      )}
    </figure>
  );
};

export { Image };
