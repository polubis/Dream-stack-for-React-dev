import c from 'classnames';
import type { ImageProps } from './defs';

const Image = ({
  className,
  alt,
  src,
  lazy,
  maxHeight,
  maxWidth,
  ...props
}: ImageProps) => {
  return (
    <picture className={c('image', className)} {...props}>
      <img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        style={{
          maxHeight,
          maxWidth,
        }}
      />
    </picture>
  );
};

export { Image };
