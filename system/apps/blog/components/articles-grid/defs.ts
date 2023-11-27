import type { ArticleStatus } from '@system/blog-api-models';
import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react';

type OnGoToClickEvent = ReactMouseEvent<HTMLButtonElement, MouseEvent>;

interface ArticleTileProps {
  title: string;
  thumbnail: string;
  description: string;
  author: string;
  width: number;
  status: ArticleStatus;
  tags: string[];
  url: string;
}

interface ArticlesGridProps {
  children: ReactNode | ReactNode[];
}

export type { ArticlesGridProps, ArticleTileProps, OnGoToClickEvent };
