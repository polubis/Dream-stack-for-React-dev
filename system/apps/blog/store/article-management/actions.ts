import { useArticleManagementStore } from './store';
import type * as ArticleManagement from './defs';
import { article_reviews_actions } from '../article-reviews';
import { article_actions } from '../article/actions';
import { add_article_review_actions } from '../add-article-review';
import { mockArticleReview } from '@system/blog-api-mocks';

const article_management_actions: ArticleManagement.Actions = {
  start: (id, url, lang) => {
    useArticleManagementStore.setState({ is: 'active', id });
    article_reviews_actions.load(id);
    article_actions.load({ url, lang });
  },
  reset: () => {
    useArticleManagementStore.setState({ is: 'idle' });
  },
  confirm: async (id) => {
    await add_article_review_actions.confirm(id);
    // @TODO: Remove mock when backend will finish work.
    article_reviews_actions.addReview(mockArticleReview());
  },
};

export { article_management_actions };
