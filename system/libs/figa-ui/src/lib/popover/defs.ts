import type { ReactNode } from 'react';
import type { SpacingKey } from '../theme-provider';
import type { BoxProps } from '../box';

interface PopoverProps {
  closeMode?: 'backdrop' | 'own';
  offsetY?: SpacingKey;
  offsetX?: SpacingKey;
  openOnInit?: boolean;
  children: [ReactNode, ReactNode];
}

interface PopoverContext
  extends Required<
    Omit<PopoverProps, 'children' | 'className' | 'openOnInit'>
  > {
  opened: boolean;
  triggerId: string;
  contentId: string;
  closed: boolean;
  open(): void;
  close(): void;
  toggle(): void;
}

interface PopoverTriggerProps {
  children: ReactNode;
}

interface PopoverContentProps extends Omit<BoxProps, 'children' | 'id'> {
  children: ReactNode;
}

export type {
  PopoverProps,
  PopoverContext,
  PopoverTriggerProps,
  PopoverContentProps,
};
