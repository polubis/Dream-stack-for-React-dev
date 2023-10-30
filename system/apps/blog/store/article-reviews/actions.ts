import { getArticleReviews, getError } from '@system/blog-api';
import type * as ArticleReviews from './defs';
import { useArticleReviewsStore } from './store';

const { setState: set, getState: get } = useArticleReviewsStore;

const article_reviews_actions: ArticleReviews.Actions = {
  load: async (id) => {
    set({ is: 'busy' }, true);

    try {
      const { data } = await getArticleReviews({ id });
      set({ is: 'ok', reviews: data }, true);
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) }, true);
    }
  },
  addReview: (review) => {
    const state = get();

    if (state.is === 'ok') {
      set({ reviews: [...state.reviews, review] });
      return;
    }

    throw Error('You are trying to add review when there is no data yet');
  },
  reset: () => {
    set({ is: 'idle' }, true);
  },
};

export { article_reviews_actions };
