import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import type { INPUT_VARIANTS } from './consts';

type InputHTMLElementProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputVariant = (typeof INPUT_VARIANTS)[number];

interface InputProps extends InputHTMLElementProps {
  variant?: InputVariant;
  maxWidth?: string;
  minWidth?: string;
  invalid?: boolean;
  loading?: boolean;
}

export type { InputProps };
