import type { ReactNode, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type CheckboxHTMLElementProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'value' | 'children'
>;

interface CheckboxProps extends CheckboxHTMLElementProps {
  reversed?: boolean;
  label?: ReactNode;
}

export type { CheckboxProps };
