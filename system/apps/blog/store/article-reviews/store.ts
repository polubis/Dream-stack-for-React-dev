import { create } from 'zustand';
import type * as ArticleReviews from './defs';

const useArticleReviewsStore = create<ArticleReviews.State>(() => ({
  is: 'idle',
}));

export { useArticleReviewsStore };
