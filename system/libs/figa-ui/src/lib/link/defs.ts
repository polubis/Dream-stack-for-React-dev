import type { ReactNode } from 'react';
import type { FontVariant } from '../font';

interface LinkProps {
  className?: string;
  variant: FontVariant;
  children: ReactNode;
}

export type { LinkProps };
