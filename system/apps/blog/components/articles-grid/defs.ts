import type { ArticleDto, ArticleStatus } from '@system/blog-api-models';
import type { MouseEvent as ReactMouseEvent } from 'react';

type OnGoToClickEvent = ReactMouseEvent<HTMLButtonElement, MouseEvent>;

interface ArticleTileProps {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  author: string;
  stack: string[];
  width: number;
  status: ArticleStatus;
  tags: string[];
  url: string;
}

interface ArticlesGridProps {
  url(article: ArticleDto): string;
  articles: ArticleDto[];
}

export type { ArticlesGridProps, ArticleTileProps, OnGoToClickEvent };
