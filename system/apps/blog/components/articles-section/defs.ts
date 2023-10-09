import type { ArticleDto } from '@system/blog-api-models';
import type { NextRouter } from 'next/router';
import type { ArticlesGridProps } from '../articles-grid';

interface ArticlesSectionProps
  extends Pick<ArticlesGridProps, 'placeholders' | 'articles'> {
  pathCreator: (router: NextRouter, article: ArticleDto) => string;
}

export type { ArticlesSectionProps };
