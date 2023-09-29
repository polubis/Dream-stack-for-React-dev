import { ErrorIcon } from '../icon';
import { Loader } from '../loader';
import type { ControlProps, InputProps, TextareaProps } from './defs';

import c from 'classnames';

const Control = ({
  variant = 'filled',
  invalid,
  disabled,
  loading,
  className,
  children,
}: ControlProps) => {
  return (
    <div
      className={c(variant, { invalid }, { disabled }, { loading }, className)}
    >
      {invalid && !disabled && !loading && <ErrorIcon className="input-icon" />}
      {loading && <Loader className="input-loader" size="tiny" />}
      {children}
    </div>
  );
};

const Textarea = ({
  className,
  variant,
  invalid,
  disabled,
  loading,
  style,
  ...textareaProps
}: TextareaProps) => {
  return (
    <Control
      className={c('textarea', className)}
      variant={variant}
      invalid={invalid}
      disabled={disabled}
      loading={loading}
    >
      <textarea {...textareaProps} style={style} disabled={disabled} />
    </Control>
  );
};

const Input = ({
  className,
  variant,
  invalid,
  disabled,
  loading,
  suffx,
  prefx,
  ...inputProps
}: InputProps) => {
  return (
    <Control
      className={c('input', className, { prefx }, { suffx })}
      variant={variant}
      invalid={invalid}
      disabled={disabled}
      loading={loading}
    >
      {prefx && <div className="prefx-wrapper">{prefx}</div>}
      <input {...inputProps} disabled={disabled} />
      {suffx && !loading && !invalid && (
        <div className="suffx-wrapper">{suffx}</div>
      )}
    </Control>
  );
};

export { Input, Textarea };
