import type { Lang } from '@system/blog-api-models';
import type { ArticlesStore } from '../../store/articles';
import type { ReactNode } from 'react';

interface ArticlesScreenProps {
  children: ReactNode;
}

interface ArticlesScreenContentProps {
  path(lang: Lang, article: ArticlesStore.Article): string;
}

export type { ArticlesScreenProps, ArticlesScreenContentProps };
