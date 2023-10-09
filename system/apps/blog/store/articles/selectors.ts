import type * as Articles from './defs';
import { useArticlesStore } from './store';

const { getState: get } = useArticlesStore;

const getSafeStateOrThrow = (
  state: Articles.State
): Articles.Ok | Articles.AllLoaded => {
  if (state.is === 'ok' || state.is === 'all_loaded') {
    return state;
  }

  throw Error(`The read attempt detected in invalid state: ${state.is}`);
};

const articles_selectors: Articles.Selectors = {
  articles: () => getSafeStateOrThrow(get()).articles,
  useArticles: () =>
    useArticlesStore((state) => getSafeStateOrThrow(state)).articles,
  useState: () => useArticlesStore((state) => state),
};

export { articles_selectors };
