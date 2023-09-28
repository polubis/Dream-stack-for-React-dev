import { useArticlesStore } from './articles.store';
import { ArticlesStore } from './defs';

const getArticlesGuard = (
  state: ArticlesStore.State
): ArticlesStore.ArticlesCollection => {
  if (state.is === 'ok') return state.articles;

  throw Error('You tried to read articles when they are not loaded!');
};

export const articles_store_selectors: ArticlesStore.Selectors = {
  // For components to use.
  useArticles: () => useArticlesStore(getArticlesGuard),
  // For event handlers - this will not cause rerender!
  articles: () => getArticlesGuard(useArticlesStore.getState()),
};
