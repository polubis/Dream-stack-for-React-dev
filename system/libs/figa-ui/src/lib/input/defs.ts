import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';
import type { INPUT_VARIANTS } from './consts';

type InputHTMLElementProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type TextareaHTMLElementProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type InputVariant = (typeof INPUT_VARIANTS)[number];

type ControlProps  = {
  className?: string;
  variant?: InputVariant;
  maxWidth?: string;
  disabled?: boolean;
  minWidth?: string;
  invalid?: boolean;
  loading?: boolean;
  children: ReactNode;
}

type BaseProps = Omit<ControlProps, 'children' | 'disabled' | 'className'>;

type InputProps = InputHTMLElementProps & BaseProps;

type TextareaProps = TextareaHTMLElementProps &
  BaseProps & { minHeight?: string; maxHeight?: string };

export type {
  InputProps,
  TextareaHTMLElementProps,
  InputHTMLElementProps,
  TextareaProps,
  ControlProps,
};
