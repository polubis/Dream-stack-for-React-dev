import type { ArticlesStore } from '../../store-factories/articles';

interface ArticlesScreenProps {
  selectors: ArticlesStore.Selectors;
  actions: ArticlesStore.Actions;
}

export type { ArticlesScreenProps };
