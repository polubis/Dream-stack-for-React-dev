import { Loader } from '../loader';
import type { ButtonProps } from './defs';

import c from 'classnames';

const Button = ({ className, loading, equal, ...props }: ButtonProps) => {
  const {
    shape = 'rectangle',
    size = 3,
    variant = 'filled',
    motive = 'primary',
  } = props;

  const classes = c(
    'button',
    'size-' + size,
    shape,
    variant,
    motive,
    { loading },
    { equal },
    className
  );

  if (loading) {
    const { children, disabled, ...btnProps } = props;

    return (
      <button className={classes} disabled {...btnProps}>
        <span className="child">{children}</span>
        <Loader size="tiny" />
      </button>
    );
  }

  return <button className={classes} {...props} />;
};

export { Button };
