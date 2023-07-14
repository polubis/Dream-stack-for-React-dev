import type { CSSProperties, MutableRefObject } from 'react';

type ScrollHideStyle = Required<Pick<CSSProperties, 'overflow'>>;

interface ScrollHideReturn<T extends HTMLElement> {
  ref: MutableRefObject<T | null>;
}

export type { ScrollHideReturn, ScrollHideStyle };
