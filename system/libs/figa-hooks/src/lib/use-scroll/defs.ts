import type { MutableRefObject } from 'react';

interface BaseScrollState {
  prev: number;
  curr: number;
  value: number;
}

interface IdleScrollState {
  is: 'idle';
}

interface ProgressScrollState extends BaseScrollState {
  is: 'progress';
}

interface RegressScrollState extends BaseScrollState {
  is: 'regress';
}

interface UnchangedScrollState extends BaseScrollState {
  is: 'unchanged';
}

type ScrollAxis = 'x' | 'y';

type ScrollState =
  | IdleScrollState
  | ProgressScrollState
  | RegressScrollState
  | UnchangedScrollState;

type ScrollResult = ScrollState['is'];

interface ScrollConfig {
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
