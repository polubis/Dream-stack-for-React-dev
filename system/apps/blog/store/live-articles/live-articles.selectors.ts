import { GetArticlesResponse } from '@system/blog-api-models';
import { LiveArticlesStore } from './defs';
import { useLiveArticlesStore } from './live-articles.store';

const checkHasLoadedAll = ({
  totalPages,
  currentPage,
}: GetArticlesResponse): boolean => currentPage >= totalPages;

const isSafeState = (
  state: LiveArticlesStore.State
): state is LiveArticlesStore.SafeState =>
  state.is !== 'idle' && state.is !== 'fail';

export const live_articles_selectors: LiveArticlesStore.Selectors = {
  safeState: () => {
    const state = useLiveArticlesStore.getState();

    if (isSafeState(state)) {
      return state;
    }

    throw Error('Invalid read attempt for state ' + state.is);
  },
  allLoaded: () =>
    checkHasLoadedAll(live_articles_selectors.safeState().response),
  getSearch: () => {
    const state = useLiveArticlesStore.getState();
    return isSafeState(state) ? state.params.Search : '';
  },
};
