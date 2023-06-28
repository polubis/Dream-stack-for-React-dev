import type { AvatarProps, ImageProps } from './defs';

import c from 'classnames';

const Avatar = ({
  className,
  renderImage,
  size = 'medium',
  shape = 'rounded',
  alt,
  src,
  loading,
  ...props
}: AvatarProps) => {
  const imageProps: ImageProps = {
    alt,
    src,
    loading,
    className: 'avatar-image',
  };

  return (
    <figure className={c('avatar', size, shape, className)} {...props}>
      {renderImage ? (
        renderImage(imageProps)
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img {...imageProps} />
      )}
    </figure>
  );
};

export { Avatar };
