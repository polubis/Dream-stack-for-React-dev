import { create } from 'zustand';
import type { ArticlesStore } from './defs';

const useArticlesStore = create<ArticlesStore.State>(() => ({
  is: 'idle',
  defaultFilters: {
    CurrentPage: 1,
    ItemsPerPage: 20,
    Status: 'Accepted',
    lang: 'en',
    Search: '',
    Tags: [],
  },
}));

export { useArticlesStore };
