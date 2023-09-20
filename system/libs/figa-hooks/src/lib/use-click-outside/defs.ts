import type { MutableRefObject } from 'react';

type UseClickOutsideConfig  ={
  onOutside: () => void;
}

type UseClickOutsideReturn<T extends HTMLElement>  = {
  ref: MutableRefObject<T | null>;
}

export type { UseClickOutsideConfig, UseClickOutsideReturn };
