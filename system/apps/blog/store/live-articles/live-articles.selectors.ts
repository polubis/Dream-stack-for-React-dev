import { GetArticlesResponse } from '@system/blog-api-models';
import { LiveArticlesStore } from './defs';
import { useLiveArticlesStore } from './live-articles.store';

const checkHasLoadedAll = ({
  totalPages,
  currentPage,
}: GetArticlesResponse): boolean => currentPage >= totalPages;

export const live_articles_selectors: LiveArticlesStore.Selectors = {
  safeState: () => {
    const state = useLiveArticlesStore.getState();

    if (state.is === 'idle' || state.is === 'fail') {
      throw Error('Invalid read attempt for state ' + state.is);
    }

    return state;
  },
  allLoaded: () =>
    checkHasLoadedAll(live_articles_selectors.safeState().response),
};
