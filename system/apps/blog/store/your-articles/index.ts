import { createArticlesStore } from '../../store-factories/articles';

const [useYourArticlesStore, your_articles_actions, your_articles_selectors] =
  createArticlesStore();

export { useYourArticlesStore, your_articles_selectors, your_articles_actions };
