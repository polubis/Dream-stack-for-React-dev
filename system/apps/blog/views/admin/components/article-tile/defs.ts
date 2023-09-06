import type { MouseEvent as ReactMouseEvent } from 'react';

type OnGoToClickEvent = ReactMouseEvent<HTMLButtonElement, MouseEvent>;
type OnGoToClick = (e: OnGoToClickEvent) => void;

interface ArticleTileProps {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  author: string;
  stack: string[];
  width: number;
  tags: string[];
  onGoToClick: OnGoToClick;
}

export type { ArticleTileProps, OnGoToClickEvent, OnGoToClick };
