import type { MutableRefObject } from 'react';

interface UseClickOutsideConfig {
  onOutside: () => void;
}

interface UseClickOutsideReturn<T extends HTMLElement> {
  ref: MutableRefObject<T | null>;
}

export type { UseClickOutsideConfig, UseClickOutsideReturn };
