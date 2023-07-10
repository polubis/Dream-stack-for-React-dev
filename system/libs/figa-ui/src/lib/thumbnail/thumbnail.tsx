import { Font } from '../font';
import { Image } from '../image';
import type { ThumbnailProps } from './defs';
import c from 'classnames';

const Thumbnail = ({ title, className, img, ...props }: ThumbnailProps) => {
  return (
    <div className={c('thumbnail', className)}>
      {img ? (
        img({
          title,
          className,
          ...props,
        })
      ) : (
        <Image {...props} />
      )}
      <div className="thumbnail-content">
        <Font variant="h2">{title}</Font>
      </div>
    </div>
  );
};

export { Thumbnail };
