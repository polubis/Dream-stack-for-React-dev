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

type ElementSizeState = UndetectedState | DetectedState;

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
  ElementSizeStateStatus,
  ElementSizeState,
  ElementSizeReturn,
  ElementSizeConfig,
};
