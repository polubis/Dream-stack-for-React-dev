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

interface ControlProps {
  className?: string;
  variant?: InputVariant;
  disabled?: boolean;
  invalid?: boolean;
  maxWidth?: string;
  minWidth?: string;
  loading?: boolean;
  children: ReactNode;
}

type BaseProps = Omit<ControlProps, 'children' | 'disabled' | 'className'>;

type InputProps = InputHTMLElementProps &
  BaseProps & { prefx?: ReactNode; suffx?: ReactNode };

type TextareaProps = TextareaHTMLElementProps & BaseProps;

export type {
  InputProps,
  TextareaHTMLElementProps,
  InputHTMLElementProps,
  TextareaProps,
  ControlProps,
};
