import type { Lang } from '@system/blog-api-models';
import type { ArticlesStore } from '../../store-factories/articles';
import type { ReactNode } from 'react';

interface ArticlesScreenProps {
  selectors: ArticlesStore.Selectors;
  actions: ArticlesStore.Actions;
  makeUrl: (lang: Lang, article: ArticlesStore.Article) => string;
  loadOnInit?: boolean;
  filters?: ReactNode;
}

export type { ArticlesScreenProps };
