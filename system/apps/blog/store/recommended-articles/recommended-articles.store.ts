import { create } from 'zustand';
import type { RecommendedArticlesStore } from './defs';
import { getArticles, getError } from '@system/blog-api';

const useRecommendedArticlesStore = create<RecommendedArticlesStore>((set) => ({
  key: 'idle',
  articles: [],
  error: null,
  load: async () => {
    set({ key: 'pending', articles: [], error: null });

    try {
      const { data } = await getArticles({
        CurrentPage: 1,
        ItemsPerPage: 16,
        lang: 'en',
        Tags: [],
        Search: '',
        Status: 'Accepted',
      });
      set({ key: 'ok', articles: data });
    } catch (error: unknown) {
      set({ key: 'error', error: getError(error) });
    }
  },
}));

export { useRecommendedArticlesStore };
