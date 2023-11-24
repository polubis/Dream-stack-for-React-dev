import { deleteArticle, getError } from '@system/blog-api';
import { type DeleteArticleStore } from './defs';
import { useDeleteArticleStore } from './store';
import { your_articles_actions } from '../your-articles';

const { setState } = useDeleteArticleStore;

const set = (state: DeleteArticleStore.State): void => {
  setState(state, true);
};

const delete_article_store_actions: DeleteArticleStore.Actions = {
  reset: () => {
    set({ is: 'idle' });
  },
  delete: async (id) => {
    set({ is: 'busy' });

    try {
      await deleteArticle({ id });
      your_articles_actions.reset();
      set({ is: 'ok' });
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
      throw error;
    }
  },
};

export { delete_article_store_actions };
