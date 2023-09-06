import { getArticleReviews, getError } from '@system/blog-api';
import type * as ArticleReviews from './defs';
import { useArticleReviewsStore } from './store';

const { setState: set } = useArticleReviewsStore;

const article_reviews_actions: ArticleReviews.Actions = {
  load: async (id) => {
    set({ is: 'busy' });

    try {
      const { data } = await getArticleReviews({ id });
      set({ is: 'ok', reviews: data });
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
    }
  },
};

export { article_reviews_actions };
