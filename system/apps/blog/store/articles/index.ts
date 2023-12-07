import { createArticlesStore } from '../../store-factories/articles';

const [useArticlesStore, articles_store_actions, articles_store_selectors] =
  createArticlesStore();

export { useArticlesStore, articles_store_actions, articles_store_selectors };
