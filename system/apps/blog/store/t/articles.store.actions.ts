import { articles_store_states } from './articles.store.states';
import { ArticlesStore } from './defs';
// Some function to get articles from API.
import { getArticles } from '@articles.service';

export const articles_store_actions: ArticlesStore.Actions = {
  init: async () => {
    try {
      articles_store_states.busy();
      const articles = await getArticles();
      articles_store_states.ok(articles);
    } catch (error: unknown) {
      articles_store_states.fail(error);
    }
  },
  reset: articles_store_states.idle,
};
