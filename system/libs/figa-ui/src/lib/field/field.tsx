import { Box } from '../box';
import { Font } from '../font';
import type { FieldProps } from './defs';

import c from 'classnames';

const Field = ({
  className,
  hint,
  children,
  error,
  label,
  ...props
}: FieldProps) => {
  return (
    <Box className={c('field', className, { invalid: !!error })} {...props}>
      {label && (
        <Font variant="b2" className="field-label">
          {label}
        </Font>
      )}
      {children}
      {(!!error || !!hint) && (
        <Font italic variant="b3" className="field-hint">
          {!error && hint}
          {error}
        </Font>
      )}
    </Box>
  );
};

export { Field };
