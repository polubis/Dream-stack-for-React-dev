import type * as ArticleReviews from './defs';
import { useArticleReviewsStore } from './store';

const article_reviews_selectors: ArticleReviews.Selectors = {
  useReviews: () => {
    return useArticleReviewsStore((state) => {
      if (state.is === 'ok') return state.reviews;

      throw Error(`The read attempt detected in invalid state: ${state.is}`);
    });
  },
};

export { article_reviews_selectors };
