import c from 'classnames';
import type { BadgeProps } from './defs';

const Badge = ({
  className,
  children,
  variant = 'filled',
  motive = 'primary',
  ...props
}: BadgeProps) => {
  return (
    <div className={c('badge', className, variant, motive)} {...props}>
      {children}
    </div>
  );
};

export { Badge };
