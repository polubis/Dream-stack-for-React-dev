import type { ArticleDto } from '@system/blog-api-models';
import type { NextRouter } from 'next/router';

interface ArticlesSectionProps {
  articles: ArticleDto[];
  pathCreator: (router: NextRouter, article: ArticleDto) => string;
}

export type { ArticlesSectionProps };
