import type { LiveArticlesStore } from './defs';
import { useLiveArticlesStore } from './live-articles.store';

const getSafeState = (
  state: LiveArticlesStore.State
): LiveArticlesStore.Ok | LiveArticlesStore.Loading => {
  if (state.is === 'ok' || state.is === 'loading') return state;
  throw Error('Read attempt when state is ' + state.is);
};

export const live_articles_selectors: LiveArticlesStore.Selectors = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useState: () => useLiveArticlesStore(),
  articles: () => getSafeState(useLiveArticlesStore.getState()).articles,
  allLoaded: () => getSafeState(useLiveArticlesStore.getState()).allLoaded,
  is: (is) => useLiveArticlesStore.getState().is === is,
};
