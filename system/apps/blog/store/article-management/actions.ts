import { useArticleManagementStore } from './store';
import type * as ArticleManagement from './defs';
import { article_reviews_actions } from '../article-reviews';
import { article_actions } from '../article/actions';
import { add_article_review_actions } from '../add-article-review';
import { mockArticleReview } from '@system/blog-api-mocks';
import { change_article_status_actions } from '../change-article-status';

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
  changeStatus: async (id, status) => {
    if (status === 'Accepted') {
      await change_article_status_actions.accept(id);
      article_actions.update({ status });
      return;
    }

    if (status === 'NeedWork') {
      await change_article_status_actions.reject(id);
      article_actions.update({ status });
      return;
    }
  },
};

export { article_management_actions };
