import { getArticles, getError } from '@system/blog-api';
import { useRecommendedArticlesStore } from './store';
import type { RecommendedArticlesStore } from './defs';

const { setState, getState: get } = useRecommendedArticlesStore;

const set = (state: RecommendedArticlesStore.State): void => {
  setState(state, true);
};

const recommended_articles_store_actions: RecommendedArticlesStore.Actions = {
  load: async (limit, lang) => {
    const { is } = get();

    if (is === 'ok' || is === 'busy') return;

    set({ is: 'busy' });

    try {
      const { data } = await getArticles({
        CurrentPage: 1,
        ItemsPerPage: limit,
        lang,
        Tags: [],
        Search: '',
        Status: 'Accepted',
      });

      set({ is: 'ok', articles: data });
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
    }
  },
};

export { recommended_articles_store_actions };
