import { create } from 'zustand';
import type { ArticlesStore } from './defs';
import { articles_factories } from './articles.factories';

const useArticlesStore = create<ArticlesStore.State>(() => ({
  is: 'idle',
  defaultFilters: articles_factories.defaultFilters('en', false),
}));

export { useArticlesStore };
