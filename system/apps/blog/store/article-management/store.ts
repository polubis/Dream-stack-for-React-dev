import { create } from 'zustand';
import type { ArticleManagementStore } from './defs';

const useArticleManagementStore = create<ArticleManagementStore.State>(() => ({
  is: 'idle',
}));

export { useArticleManagementStore };
