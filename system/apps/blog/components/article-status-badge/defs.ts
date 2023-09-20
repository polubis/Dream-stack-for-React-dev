import type { ArticleStatus } from '@system/blog-api-models';
import type { ReactNode } from 'react';

type ArticleStatusBadgeProps = {
  status: ArticleStatus;
}

type ArticleStatusBadgeMap = Record<ArticleStatus, ReactNode>;

export type { ArticleStatusBadgeProps, ArticleStatusBadgeMap };
