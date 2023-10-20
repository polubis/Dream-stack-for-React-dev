import type { YourArticlesStore } from './defs';
import { useYourArticlesStore } from './your-articles.store';

const isSafeState = (
  state: YourArticlesStore.State
): state is YourArticlesStore.SafeState => state.is !== 'idle';

const your_articles_selectors: YourArticlesStore.Selectors = {
  safeState: () => {
    const state = useYourArticlesStore.getState();

    if (isSafeState(state)) {
      return state;
    }

    throw Error('Invalid read attempt for state ' + state.is);
  },
  useSafeState: () => {
    return useYourArticlesStore((state) => {
      if (isSafeState(state)) {
        return state;
      }

      throw Error('Invalid read attempt for state ' + state.is);
    });
  },
};

export { your_articles_selectors };
