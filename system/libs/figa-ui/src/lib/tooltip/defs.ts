import type { ReactNode } from 'react';
import { TOOLTIP_DIRECTION } from './consts';

type TooltipDirection = (typeof TOOLTIP_DIRECTION)[number]

interface TooltipProps {
  className?: string;
  content: string;
  delay?: number;
  direction?: TooltipDirection;
  children: ReactNode;
}

export type { TooltipProps, TooltipDirection };