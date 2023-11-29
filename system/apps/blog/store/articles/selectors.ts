import type { ArticlesStore } from './defs';
import { useArticlesStore } from './store';

const { getState: get } = useArticlesStore;

const articles_store_selectors: ArticlesStore.Selectors = {
  articles: () => {
    const state = get();

    if (state.is === 'ok' || state.is === 'all_loaded') {
      return state.articles;
    }

    throw Error(`The read attempt detected in invalid state: ${state.is}`);
  },
};

export { articles_store_selectors };
