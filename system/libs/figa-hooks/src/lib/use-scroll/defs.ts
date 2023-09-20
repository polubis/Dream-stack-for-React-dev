import type { MutableRefObject } from 'react';

type BaseScrollState  = {
  prev: number;
  curr: number;
  value: number;
}

type IdleScrollState  = {
  is: 'idle';
}

type ProgressScrollState  = BaseScrollState & {
  is: 'progress';
}

type RegressScrollState  = BaseScrollState & {
  is: 'regress';
}

type UnchangedScrollState  = BaseScrollState & {
  is: 'unchanged';
}

type ScrollAxis = 'x' | 'y';

type ScrollState =
  | IdleScrollState
  | ProgressScrollState
  | RegressScrollState
  | UnchangedScrollState;

type ScrollResult = ScrollState['is'];

type ScrollConfig  = {
  axis?: ScrollAxis;
  delay?: number;
  onScroll?(state: ScrollState): void;
}

type ScrollReturn<T extends HTMLElement = HTMLElement> = Readonly<
  [ScrollState, MutableRefObject<T | null>]
>;

export type {
  IdleScrollState,
  ProgressScrollState,
  RegressScrollState,
  ScrollAxis,
  UnchangedScrollState,
  BaseScrollState,
  ScrollReturn,
  ScrollConfig,
  ScrollResult,
  ScrollState,
};
