import type { ReactNode, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type CheckboxHTMLElementProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'value' | 'children'
>;

type CheckboxProps  = CheckboxHTMLElementProps & {
  reversed?: boolean;
  label?: ReactNode;
}

export type { CheckboxProps };
