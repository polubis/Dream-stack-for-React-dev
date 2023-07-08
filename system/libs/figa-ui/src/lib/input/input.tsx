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
  minWidth,
  maxWidth,
  children,
}: ControlProps) => {
  return (
    <div
      className={c(variant, { invalid }, { disabled }, { loading }, className)}
      style={{
        minWidth,
        maxWidth,
      }}
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
  maxWidth,
  minWidth,
  invalid,
  disabled,
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
    >
      <input {...inputProps} disabled={disabled} />
    </Control>
  );
};

export { Input, Textarea };
