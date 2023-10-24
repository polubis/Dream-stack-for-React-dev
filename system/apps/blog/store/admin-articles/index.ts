import { getArticles } from '@system/blog-api';
import { createArticlesStore } from '../../store-factories/articles';

const [
  useAdminsArticlesStore,
  admin_articles_selectors,
  admin_articles_actions,
] = createArticlesStore({ service: getArticles });

export {
  useAdminsArticlesStore,
  admin_articles_selectors,
  admin_articles_actions,
};
