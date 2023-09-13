import type { CSSProperties, MutableRefObject } from 'react';

type ScrollHideStyle = Required<Pick<CSSProperties, 'overflow'>>;
type HideScroll = () => void;
type ShowScroll = () => void;

type ScrollHideReturn<T extends HTMLElement> = [
  MutableRefObject<T | null>,
  HideScroll,
  ShowScroll
];

export type { ScrollHideReturn, ScrollHideStyle, ShowScroll, HideScroll };
