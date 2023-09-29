import type * as Articles from './defs';
import { useArticlesStore } from './store';

const { getState: get } = useArticlesStore;

const articles_selectors: Articles.Selectors = {
  articles: () => {
    const state = get();

    if (state.is === 'ok' || state.is === 'all_loaded') {
      return state.articles;
    }

    throw Error(`The read attempt detected in invalid state: ${state.is}`);
  },
};

export { articles_selectors };
