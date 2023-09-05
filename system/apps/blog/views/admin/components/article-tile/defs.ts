import type { MouseEvent as ReactMouseEvent } from 'react';

type GoToClickEvent = ReactMouseEvent<HTMLButtonElement, MouseEvent>

interface ArticleTileProps {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  author: string;
  stack: string[];
  width: number;
  tags: string[];
  onGoToClick(e: GoToClickEvent): void;
}

export type { ArticleTileProps, GoToClickEvent };
