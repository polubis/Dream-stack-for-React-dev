import type { ArticleReviewsStore } from './defs';
import { useArticleReviewsStore } from './store';

const article_reviews_store_selectors: ArticleReviewsStore.Selectors = {
  useReviews: () => {
    return useArticleReviewsStore((state) => {
      if (state.is === 'ok') return state.reviews;

      throw Error(
        `The read attempt detected in ArticleReviewsStore, the state is: ${state.is}`
      );
    });
  },
};

export { article_reviews_store_selectors };
