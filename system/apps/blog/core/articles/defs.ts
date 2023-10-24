import type { ArticlesStore } from '../../store-factories/articles';

interface ArticlesFilteringConfig {
  selectors: ArticlesStore.Selectors;
  actions: ArticlesStore.Actions;
}

export type { ArticlesFilteringConfig }