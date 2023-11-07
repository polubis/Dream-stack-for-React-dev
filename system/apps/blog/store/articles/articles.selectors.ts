/* eslint-disable react-hooks/rules-of-hooks */
import { useArticlesStore } from './articles.store';
import type { ArticlesStore } from './defs';

const articles_selectors: ArticlesStore.Selectors = {
  state: useArticlesStore.getState,
  useState: useArticlesStore,
  useSafeState: () =>
    useArticlesStore((state) => {
      if (state.is === 'idle')
        throw Error('Fail fast - useSafeState used in wrong state ' + state.is);

      return state;
    }),
  safeState: () => {
    const state = useArticlesStore.getState();

    if (state.is === 'idle')
      throw Error('Fail fast - useSafeState used in wrong state ' + state.is);

    return state;
  },
};

export { articles_selectors };
