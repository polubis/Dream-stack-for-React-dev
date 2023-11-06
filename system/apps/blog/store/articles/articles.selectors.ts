/* eslint-disable react-hooks/rules-of-hooks */
import { useArticlesStore } from './articles.store';
import { ArticlesStore } from './defs';

const articles_selectors: ArticlesStore.Selectors = {
  useSafeState: () =>
    useArticlesStore((state) => {
      if (state.is === 'idle')
        throw Error('Fail fast - useSafeState used in wrong state ' + state.is);

      return state;
    }),
};

export { articles_selectors };
