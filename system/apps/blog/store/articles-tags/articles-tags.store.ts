import { create } from 'zustand';
import type { ArticlesTagsStore } from './defs';

const useArticlesTagsStore = create<ArticlesTagsStore.State>(() => ({
  is: 'idle',
}));

export { useArticlesTagsStore };
