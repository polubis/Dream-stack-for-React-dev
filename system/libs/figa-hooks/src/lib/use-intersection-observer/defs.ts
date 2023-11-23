import type { MutableRefObject } from 'react';

interface IntersectionObserverConfig extends IntersectionObserverInit {
  once?: boolean;
}

interface IntersectionObserverReturn<T extends HTMLElement> {
  ref: MutableRefObject<T | null>;
  visible: boolean;
}

export type { IntersectionObserverConfig, IntersectionObserverReturn };
