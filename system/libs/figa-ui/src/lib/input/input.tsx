import { ErrorIcon } from '../icon';
import { Loader } from '../loader';
import type { ControlProps, InputProps, TextareaProps } from './defs';

import c from 'classnames';

const Control = ({
  variant = 'filled',
  invalid,
  disabled,
  loading,
  prefix,
  className,
  minWidth,
  maxWidth,
  children,
}: ControlProps) => {
  return (
    <div
      className={c(
        variant,
        { invalid },
        { disabled },
        { loading },
        { prefix },
        className
      )}
      style={{
        minWidth,
        maxWidth,
      }}
    >
      {prefix && <>`+`</>}
      {invalid && !disabled && !loading && <ErrorIcon className="input-icon" />}
      {loading && <Loader className="input-loader" size="tiny" />}
      {children}
    </div>
  );
};

const Textarea = ({
  className,
  variant,
  maxWidth,
  minWidth,
  invalid,
  disabled,
  prefix,
  loading,
  minHeight,
  maxHeight,
  style,
  ...textareaProps
}: TextareaProps) => {
  return (
    <Control
      className={c('textarea', className)}
      variant={variant}
      maxWidth={maxWidth}
      minWidth={minWidth}
      invalid={invalid}
      disabled={disabled}
      loading={loading}
      prefix={prefix}
    >
      <textarea
        {...textareaProps}
        style={{
          ...style,
          minHeight,
          maxHeight,
        }}
        disabled={disabled}
      />
    </Control>
  );
};

const Input = ({
  className,
  variant,
  maxWidth,
  minWidth,
  invalid,
  disabled,
  loading,
  prefix,
  ...inputProps
}: InputProps) => {
  return (
    <Control
      className={c('input', className)}
      variant={variant}
      maxWidth={maxWidth}
      minWidth={minWidth}
      invalid={invalid}
      disabled={disabled}
      loading={loading}
      prefix={prefix}
    >
      <input {...inputProps} disabled={disabled} />
    </Control>
  );
};

export { Input, Textarea };
