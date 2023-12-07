import type { ArticlesStore } from '../../store-factories/articles';
import type { ReactNode } from 'react';

interface ArticlesScreenProps {
  selectors: ArticlesStore.Selectors;
  actions: ArticlesStore.Actions;
  filters?: ReactNode;
}

export type { ArticlesScreenProps };
