import type { CheckboxProps } from './defs';
import c from 'classnames';
import { useId } from 'react';
import { Font } from '../font';

const Checkbox = ({
  className,
  reversed,
  label,
  id,
  ...props
}: CheckboxProps) => {
  const checkboxId = useId();
  const idToUse = id ?? checkboxId;

  return (
    <div className={c('checkbox', className, { reversed })}>
      <input {...props} id={idToUse} type="checkbox" />
      {label && (
        <label htmlFor={idToUse}>
          <Font variant="b2">{label}</Font>
        </label>
      )}
    </div>
  );
};

export { Checkbox };
