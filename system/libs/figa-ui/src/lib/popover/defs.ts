import type { ReactNode } from 'react';
import type { SpacingKey } from '../theme-provider';

interface PopoverProps {
  className?: string;
  closeMode?: 'outside' | 'backdrop' | 'own';
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

interface PopoverContentProps {
  children: ReactNode;
}

export type {
  PopoverProps,
  PopoverContext,
  PopoverTriggerProps,
  PopoverContentProps,
};
