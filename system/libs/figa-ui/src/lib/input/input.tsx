import { ErrorIcon } from '../icon';
import { Loader } from '../loader';
import { Select } from '../select';
import { PREFIX_VARIANTS } from './consts';
import { useState } from 'react';
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
  const [selectedPrefix, setSelectedPrefix] = useState(''); // Stan do przechowywania wybranej opcji

  const handlePrefixChange = (newPrefix: string) => {
    setSelectedPrefix(newPrefix);
  };

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
      {prefix && (
        <Select
          options={PREFIX_VARIANTS.map((item) => ({
            key: item.key.toString(),
            child: item.prefix,
          }))}
          placeholder="Select your prefix"
          value={selectedPrefix}
          onChange={handlePrefixChange}
        />
      )}
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
