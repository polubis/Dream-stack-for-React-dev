import { ErrorIcon } from '../icon';
import { Loader } from '../loader';
import type { InputProps } from './defs';

import c from 'classnames';

const Input = ({
  className,
  variant = 'filled',
  maxWidth,
  minWidth,
  invalid,
  disabled,
  loading,
  ...inputProps
}: InputProps) => {
  return (
    <div
      className={c(
        'input',
        variant,
        { invalid },
        { disabled },
        { loading },
        className
      )}
      style={{
        minWidth,
        maxWidth,
      }}
    >
      {invalid && !disabled && !loading && <ErrorIcon className="input-icon" />}
      {loading && <Loader className="input-loader" size="tiny" />}
      <input {...inputProps} disabled={disabled} />
    </div>
  );
};

export { Input };
