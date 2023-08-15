import { create } from 'zustand';
import { Article } from './defs';

const useArticleStore = create<Article.State>(() => ({ is: 'idle' }));

export { useArticleStore };
