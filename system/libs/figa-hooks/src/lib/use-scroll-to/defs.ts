import type { MutableRefObject } from 'react';

type ToTop = (behavior?: ScrollBehavior) => void;

type ScrollToReturn<T extends HTMLElement = HTMLElement> = Readonly<
  [MutableRefObject<T | null>, { toTop: ToTop }]
>;

export type { ToTop, ScrollToReturn };
