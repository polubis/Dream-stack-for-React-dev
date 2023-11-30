import type { AddArticleReviewStore } from './defs';
import { useAddArticleReviewStore } from './store';

const add_article_review_store_selectors: AddArticleReviewStore.Selectors = {
  useState: () => useAddArticleReviewStore(),
};

export { add_article_review_store_selectors };
