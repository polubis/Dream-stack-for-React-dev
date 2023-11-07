import type { MutableRefObject } from 'react';

/**
 * We'll pass this config object to hook.
 */
type IntersectionObserverConfig = IntersectionObserverInit & {
  once?: boolean;
};

/**
 * We'll return this object from hook.
 */
interface IntersectionObserverReturn<T extends HTMLElement> {
  /**
   * Reference to any HTML element.
   * The @T parameter is the type of the element we'll
   * pass. It must extend from @HTMLElement type.
   */
  ref: MutableRefObject<T | null>;
  /**
   * Indicates whether the item is visible.
   */
  visible: boolean;
}

export type { IntersectionObserverConfig, IntersectionObserverReturn };
