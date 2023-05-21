import type { ReactNode } from 'react';

type SelectOptionKey = string;

interface SelectOption<K extends SelectOptionKey = SelectOptionKey> {
  child: ReactNode;
  key: K;
}

interface SelectProps<K extends SelectOptionKey = SelectOptionKey> {
  className?: string;
  placeholder?: ReactNode;
  initialOpen?: boolean;
  value?: K;
  options: SelectOption<K>[];
  onChange: (key: K) => void;
}

export type { SelectProps, SelectOption, SelectOptionKey };
