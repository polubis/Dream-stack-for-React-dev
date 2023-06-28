import type { ReactNode } from 'react';
import type { FontVariant } from '../font';

interface BlockquoteProps {
  className?: string;
  variant: FontVariant;
  children: ReactNode;
}

export type { BlockquoteProps };
