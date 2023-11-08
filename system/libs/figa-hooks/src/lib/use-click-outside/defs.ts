import type { MutableRefObject, RefObject } from 'react';

interface UseClickOutsideConfig {
  onOutside: () => void;
  exceptionRefs?: RefObject<HTMLDivElement>[];
}

interface UseClickOutsideReturn<T extends HTMLElement> {
  ref: MutableRefObject<T | null>;
}

export type { UseClickOutsideConfig, UseClickOutsideReturn };
