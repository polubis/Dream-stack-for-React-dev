import type { ArticleStatus } from '@system/blog-api-models';

interface ArticlesStatusSelectProps {
  status: ArticleStatus;
  onChange(status: ArticleStatus): void;
}

export type { ArticlesStatusSelectProps };
