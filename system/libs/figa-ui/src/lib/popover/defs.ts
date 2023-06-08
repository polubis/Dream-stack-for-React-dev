import type { UseToggleReturn } from '@system/figa-hooks';
import type { ReactNode } from 'react';

interface PopoverProps {
  className?: string;
  initialOpen?: boolean;
  children: (toggler: UseToggleReturn) => ReactNode;
  trigger: (toggler: UseToggleReturn) => ReactNode;
}

export type { PopoverProps };
