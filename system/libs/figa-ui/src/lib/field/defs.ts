import type { ReactNode } from 'react';
import type { BoxProps } from '../box';

interface FieldProps extends BoxProps {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

export type { FieldProps };
