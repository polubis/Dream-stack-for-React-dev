import { getArticles } from '@system/blog-api';
import { ArticlesStore } from './defs';
import { create } from 'zustand';

const createArticlesStore = ({ service, state }: ArticlesStore.Config) => {
  const useStore = create<ArticlesStore.State>(() => ({
    is: 'idle',
  }));
};

createArticlesStore({
  service: getArticles,
});
