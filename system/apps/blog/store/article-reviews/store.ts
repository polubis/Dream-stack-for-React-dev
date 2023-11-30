import { create } from 'zustand';
import type { ArticleReviewsStore } from './defs';

const useArticleReviewsStore = create<ArticleReviewsStore.State>(() => ({
  is: 'idle',
}));

export { useArticleReviewsStore };
