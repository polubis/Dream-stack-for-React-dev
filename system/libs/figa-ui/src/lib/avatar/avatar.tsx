import type { AvatarProps, ImageProps } from './defs';

import c from 'classnames';

const Avatar = (props: AvatarProps) => {
  const { size = 'medium', shape = 'rounded' } = props;
  const { className, renderImage, ...imagePartialProps } = props;
  const imageClassName = 'avatar-image';
  const imageProps: ImageProps = {
    ...imagePartialProps,
    className: imageClassName,
  };

  return (
    <figure className={c('avatar', size, shape, className)}>
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
