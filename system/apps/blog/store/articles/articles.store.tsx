import { create } from 'zustand';
import type { ArticlesStore } from './defs';

const useArticlesStore = create<ArticlesStore.State>(() => ({
  is: 'idle',
}));

export { useArticlesStore };
