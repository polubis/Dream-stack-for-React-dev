import type { InputProps } from './defs';

import c from 'classnames';

const Input = ({ className, ...inputProps }: InputProps) => {
  return (
    <div className={c('input', className)}>
      <input {...inputProps} />
    </div>
  );
};

export { Input };
