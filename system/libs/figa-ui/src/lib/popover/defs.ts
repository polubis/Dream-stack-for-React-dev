import type { ToggleReturn } from '@system/figa-hooks';
import type { ReactNode } from 'react';
import type { SpacingKey } from '../theme-provider';

type PopoverProps = {
  className?: string;
  initialOpen?: boolean;
  offsetY?: SpacingKey;
  children: (toggler: ToggleReturn) => ReactNode;
  trigger: (toggler: ToggleReturn) => ReactNode;
}

export type { PopoverProps };
