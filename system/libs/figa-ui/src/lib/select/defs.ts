import type { ReactNode } from 'react';

type SelectOptionKey = string;

interface SelectOption {
  child: ReactNode;
  key: SelectOptionKey;
}

interface SelectProps {
  className?: string;
  placeholder?: ReactNode;
  initialOpen?: boolean;
  value?: SelectOptionKey;
  options: SelectOption[];
  onChange: (key: SelectOptionKey) => void;
}

export type { SelectProps, SelectOption, SelectOptionKey };
