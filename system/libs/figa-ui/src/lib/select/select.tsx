import type { SelectOptionKey, SelectProps } from './defs';
import type { MouseEventHandler } from 'react';

import { useMemo } from 'react';
import c from 'classnames';
import { Popover } from '../popover';

const Trigger = <K extends SelectOptionKey = SelectOptionKey>({
  className,
  value,
  options,
  placeholder,
}: Pick<SelectProps<K>, 'className' | 'value' | 'options' | 'placeholder'>) => {
  const { toggle, opened } = Popover.use();

  const valueToDisplay = useMemo(
    () =>
      value
        ? options.find((option) => option.key === value)?.child ?? placeholder
        : placeholder,
    [value, options, placeholder]
  );

  return (
    <Popover.Trigger>
      <button
        className={c('select-expander', className, {
          'select-expander-empty': value === '' || value === undefined,
          'select-expander-opened': opened,
        })}
        onClick={toggle}
      >
        {valueToDisplay}
      </button>
    </Popover.Trigger>
  );
};

const Content = <K extends SelectOptionKey = SelectOptionKey>({
  options,
  value,
  onChange,
}: Pick<SelectProps<K>, 'value' | 'options' | 'onChange'>) => {
  const { close } = Popover.use();

  const handleChange: MouseEventHandler<HTMLLIElement> = (e) => {
    const key = e.currentTarget.getAttribute('data-key');

    if (!key) {
      throw Error('Lack of key inside select list item');
    }

    close();
    onChange(key as K);
  };

  return (
    <Popover.Content fullWidth>
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
    </Popover.Content>
  );
};

const Select = <K extends SelectOptionKey = SelectOptionKey>({
  className,
  placeholder = 'Choose an option',
  value,
  options,
  initialOpen,
  onChange,
}: SelectProps<K>) => {
  return (
    <Popover openOnInit={initialOpen} closeMode="backdrop">
      <Trigger
        className={className}
        value={value}
        options={options}
        placeholder={placeholder}
      />
      <Content options={options} onChange={onChange} value={value} />
    </Popover>
  );
};

export { Select };
