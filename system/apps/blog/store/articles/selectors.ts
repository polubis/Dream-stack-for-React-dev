import type * as Articles from './defs';
import { useArticlesStore } from './store';

const { getState: get } = useArticlesStore;

const getArticlesOrThrow = (state: Articles.State): Articles.Ok['articles'] => {
  if (state.is === 'ok' || state.is === 'all_loaded') {
    return state.articles;
  }

  throw Error(`The read attempt detected in invalid state: ${state.is}`);
};

const articles_selectors: Articles.Selectors = {
  articles: () => getArticlesOrThrow(get()),
  useArticles: () => useArticlesStore((state) => getArticlesOrThrow(state)),
  useState: () => useArticlesStore(state => state)
};

export { articles_selectors };
