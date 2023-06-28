import type { ButtonProps } from './defs';

import c from 'classnames';

const Button = ({ className, ...rest }: ButtonProps) => {
  const {
    shape = 'rectangle',
    size = 3,
    variant = 'filled',
    motive = 'primary',
  } = rest;

  return (
    <button
      className={c('button', 'size-' + size, shape, variant, motive, className)}
      {...rest}
    />
  );
};

export { Button };
