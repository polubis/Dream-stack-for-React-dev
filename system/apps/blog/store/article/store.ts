import { create } from 'zustand';
import type { ArticleStore } from './defs';

const useArticleStore = create<ArticleStore.State>(() => ({ is: 'idle' }));

export { useArticleStore };
