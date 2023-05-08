import type { MutableRefObject } from 'react';

/**
 * We'll pass this config object to hook.
 */
interface UseClickOutsideConfig {
  /**
   * Function to call when clicked outside.
   */
  onOutside: () => void;
}

/**
 * We'll return this object from hook.
 */
interface UseClickOutsideReturn<T extends HTMLElement> {
  /**
   * Reference to any HTML element.
   * The @T parameter is the type of the element we'll
   * pass. It must extend from @HTMLElement type.
   */
  ref: MutableRefObject<T | null>;
}

export type { UseClickOutsideConfig, UseClickOutsideReturn };
