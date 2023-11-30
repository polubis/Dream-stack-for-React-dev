import { create } from 'zustand';
import { articles_store_states } from './states';
import type { ArticlesStore } from './defs';

const useArticlesStore = create<ArticlesStore.State>(() =>
  articles_store_states.idle()
);

export { useArticlesStore };
