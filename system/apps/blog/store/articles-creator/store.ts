import { create } from 'zustand';
import type { ArticlesCreatorStore } from './defs';
import { articles_creator_store_states } from './states';

const useArticlesCreatorStore = create<ArticlesCreatorStore.State>(() =>
  articles_creator_store_states.idle()
);

export { useArticlesCreatorStore };
