import { useArticleStore } from './store';
import { getArticle, getError } from '@system/blog-api';
import type { ArticleStore } from './defs';

const { getState: get, setState: set } = useArticleStore;

const article_store_actions: ArticleStore.Actions = {
  reset: () => {
    set({ is: 'idle' });
  },
  load: async (payload) => {
    try {
      set({ is: 'busy' });

      const { data: article } = await getArticle(payload);

      set({ is: 'ok', article });

      return article;
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
      throw error;
    }
  },
  update: (article) => {
    const state = get();

    if (state.is === 'ok') {
      set({ article: { ...state.article, ...article } });
      return;
    }

    throw Error('An update attempt when there is no article yet');
  },
};

export { article_store_actions };
