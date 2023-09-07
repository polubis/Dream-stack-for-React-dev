import { create } from 'zustand';
import type * as ArticleManagement from './defs';

const useArticleManagementStore = create<ArticleManagement.State>(() => ({
  is: 'idle',
}));

export { useArticleManagementStore };
