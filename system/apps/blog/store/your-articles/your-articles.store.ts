import { create } from 'zustand';
import { YourArticlesStore } from './defs';

const useYourArticlesStore = create<YourArticlesStore.State>(() => ({
  loading: false,
  error: null,
  articles: null,
  params: null,
  allLoaded: false,
}));

export { useYourArticlesStore };
