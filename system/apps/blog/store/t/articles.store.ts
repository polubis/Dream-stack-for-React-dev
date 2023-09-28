import { create } from 'zustand';
import type { ArticlesStore } from './defs';
import { articles_store_states } from './articles.store.states';

// We've used our function to create initial state.
const useArticlesStore = create<ArticlesStore.State>(() =>
  articles_store_states.idle()
);

export { useArticlesStore };
