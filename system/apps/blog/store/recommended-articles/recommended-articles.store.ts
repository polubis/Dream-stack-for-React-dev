import { create } from 'zustand';
import type { RecommendedArticlesStore } from './defs';
import { getArticles, getError } from '@system/blog-api';
import { articles_factories } from '../articles';

const useRecommendedArticlesStore = create<RecommendedArticlesStore>((set) => ({
  key: 'idle',
  articles: [],
  error: null,
  load: async () => {
    set({ key: 'pending', articles: [], error: null });

    try {
      const { data } = await getArticles(
        articles_factories.defaultFilters('en', false)
      );
      set({ key: 'ok', articles: data });
    } catch (error: unknown) {
      set({ key: 'error', error: getError(error) });
    }
  },
}));

export { useRecommendedArticlesStore };
