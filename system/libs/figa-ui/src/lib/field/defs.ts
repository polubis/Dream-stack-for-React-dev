import type { ReactNode } from 'react';
import type { BoxProps } from '../box';

type FieldProps  = BoxProps & {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

export type { FieldProps };
