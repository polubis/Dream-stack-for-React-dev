import { LiveArticlesStore } from './defs';
import { useLiveArticlesStore } from './live-articles.store';

const isSafeState = (
  state: LiveArticlesStore.State
): state is LiveArticlesStore.SafeState => state.is !== 'idle';

export const live_articles_selectors: LiveArticlesStore.Selectors = {
  safeState: () => {
    const state = useLiveArticlesStore.getState();

    if (isSafeState(state)) {
      return state;
    }

    throw Error('Invalid read attempt for state ' + state.is);
  },
  useSafeState: () => {
    return useLiveArticlesStore((state) => {
      if (isSafeState(state)) {
        return state;
      }

      throw Error('Invalid read attempt for state ' + state.is);
    });
  },
};
