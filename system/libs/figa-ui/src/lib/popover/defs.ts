import type { UseToggleReturn } from '@system/figa-hooks';
import type { ReactNode } from 'react';
import type { SpacingKey } from '../theme-provider';

interface PopoverProps {
  className?: string;
  initialOpen?: boolean;
  offsetY?: SpacingKey;
  children: (toggler: UseToggleReturn) => ReactNode;
  trigger: (toggler: UseToggleReturn) => ReactNode;
}

export type { PopoverProps };
