import { useArticlesStore } from './articles.store';
import type { ArticlesStore } from './defs';

const { setState, getState: get } = useArticlesStore;

const checkHasAllLoaded = (
  filters: ArticlesStore.Filters,
  articles: ArticlesStore.Articles
) => {
  return articles.length < filters.ItemsPerPage;
};

const set = (state: ArticlesStore.State): void => {
  setState(state, true);
};

const articles_actions: ArticlesStore.Actions = {
  sync: (filters, articles) => {
    set({
      is: checkHasAllLoaded(filters, articles) ? 'all-loaded' : 'loaded',
      filters,
      articles,
    });
  },
};

export { articles_actions };
