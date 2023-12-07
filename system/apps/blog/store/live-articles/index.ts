import { createArticlesStore } from '../../store-factories/articles';

const [useLiveArticlesStore, live_articles_actions, live_articles_selectors] =
  createArticlesStore();

export { useLiveArticlesStore, live_articles_actions, live_articles_selectors };
