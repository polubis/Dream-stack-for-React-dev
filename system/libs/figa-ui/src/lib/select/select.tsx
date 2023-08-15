import type { SelectOptionKey, SelectProps } from './defs';
import type { MouseEventHandler } from 'react';

import { useMemo } from 'react';
import { useClickOutside, useToggle } from '@system/figa-hooks';
import c from 'classnames';

const Select = <K extends SelectOptionKey = SelectOptionKey>({
  className,
  placeholder = 'Choose an option',
  value,
  options,
  initialOpen,
  onChange,
}: SelectProps<K>) => {
  const { opened, toggle, close } = useToggle({ opened: initialOpen });
  const { ref } = useClickOutside<HTMLDivElement>({
    onOutside: close,
  });

  const handleChange: MouseEventHandler<HTMLLIElement> = (e) => {
    const key = e.currentTarget.getAttribute('data-key');

    if (!key) {
      throw Error('Lack of key inside select list item');
    }

    close();
    onChange(key as K);
  };

  const valueToDisplay = useMemo(
    () =>
      value
        ? options.find((option) => option.key === value)?.child ?? placeholder
        : placeholder,
    [value, options, placeholder]
  );

  return (
    <div ref={ref} className={c('select', className)}>
      <button
        className={c('select-expander', {
          'select-expander-empty': value === '' || value === undefined,
          'select-expander-opened': opened,
        })}
        onClick={() => toggle()}
      >
        {valueToDisplay}
      </button>

      {opened && (
        <ul className="select-list">
          {options.map(({ key, child }) => (
            <li
              key={key}
              data-key={key}
              className={c('select-list-option', {
                'select-list-option-active': key === value,
              })}
              onClick={handleChange}
            >
              {child}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Select };
