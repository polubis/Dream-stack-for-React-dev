import type { ButtonProps } from './defs';

const Button = ({ className, ...rest }: ButtonProps) => {
  const {
    shape = 'rectangle',
    size = 3,
    variant = 'filled',
    motive = 'primary',
  } = rest;

  return (
    <button
      className={`button button-size-${size} button-${shape} button-${variant} button-${motive} ${className}`}
      {...rest}
    />
  );
};

export { Button };
