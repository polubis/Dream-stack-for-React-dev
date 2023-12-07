import { createArticlesStore } from '../../store-factories/articles';

const [
  useAdminsArticlesStore,
  admin_articles_actions,
  admin_articles_selectors,
] = createArticlesStore();

export {
  useAdminsArticlesStore,
  admin_articles_selectors,
  admin_articles_actions,
};
