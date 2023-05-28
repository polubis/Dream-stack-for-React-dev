import type { MutableRefObject } from 'react';

// Type to hold previous and current scroll position.
type ScrollPair = [number, number];

// Base properties used in almost all state variants.
// Added to reduce duplication.
interface BaseScrollState {
  previousScroll: number;
  currentScroll: number;
}

// Possible state shapes.
interface IdleScrollState {
  direction: 'idle';
}

interface UpScrollState extends BaseScrollState {
  direction: 'up';
}

interface DownScrollState extends BaseScrollState {
  direction: 'down';
}

interface UnchangedScrollState extends BaseScrollState {
  direction: 'unchanged';
}

// Possible scroll states.
type ScrollState =
  | IdleScrollState
  | UpScrollState
  | DownScrollState
  | UnchangedScrollState;

type ScrollStateDirection = ScrollState['direction'];

/**
 * We'll pass this config object to hook.
 */
interface UseScrollYConfig {
  delay?: number;
}

/**
 * We'll return this object from hook.
 */
interface UseScrollYReturn<T extends HTMLElement = HTMLElement> {
  /**
   * Reference to any HTML element.
   * The @T parameter is the type of the element we'll
   * pass. It must extend from @HTMLElement type.
   */
  ref: MutableRefObject<T | null>;
  /**
   * State property to read metadata in components.
   */
  state: ScrollState;
}

export type {
  UseScrollYConfig,
  UseScrollYReturn,
  ScrollPair,
  ScrollState,
  ScrollStateDirection,
};
