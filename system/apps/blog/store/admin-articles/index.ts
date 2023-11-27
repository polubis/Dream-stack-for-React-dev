import { getArticles } from '@system/blog-api';
import { createArticlesStore } from '../../store-factories/articles';

const [
  useAdminsArticlesStore,
  admin_articles_actions,
  admin_articles_selectors,
] = createArticlesStore({ service: getArticles });

export {
  useAdminsArticlesStore,
  admin_articles_selectors,
  admin_articles_actions,
};
