import type { ReactNode } from 'react';

type ProgressCircleMS = number;

type ProgressCircleChildren = (ms: ProgressCircleMS) => ReactNode;

interface ProgressCircleProps {
  className?: string;
  ms?: ProgressCircleMS;
  interval?: number;
  jump?: number;
  size?: number;
  onEnd?: () => void;
  children?: ProgressCircleChildren;
}

export type { ProgressCircleProps, ProgressCircleMS, ProgressCircleChildren };
