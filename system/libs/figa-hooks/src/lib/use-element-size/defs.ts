import type { MutableRefObject } from 'react';

interface ElementSize {
  width: number;
  height: number;
}

interface UndetectedState {
  status: 'undetected';
}

interface DetectedState extends ElementSize {
  status: 'detected';
}

interface UnsupportedState {
  status: 'unsupported';
}

type ElementSizeState = UndetectedState | DetectedState | UnsupportedState;

type ElementSizeStateStatus = ElementSizeState['status'];

interface ElementSizeConfig {
  delay?: number;
}

type ElementSizeReturn<T extends HTMLElement> = Readonly<
  [ElementSizeState, MutableRefObject<T | null>]
>;

export type {
  UndetectedState,
  ElementSize,
  DetectedState,
  UnsupportedState,
  ElementSizeStateStatus,
  ElementSizeState,
  ElementSizeReturn,
  ElementSizeConfig,
};
