import { acceptArticle, getError, rejectArticle } from '@system/blog-api';
import type * as ChangeArticleStatus from './defs';
import { useChangeArticleStatusStore } from './store';
import type { Id, Parametrized } from '@system/blog-api-models';

const { setState: set } = useChangeArticleStatusStore;

const changeStatus =
  (method: (params: Parametrized) => Promise<void>) =>
  async (id: Id): Promise<void> => {
    set({ is: 'busy' });

    try {
      await method({ id });
      set({ is: 'ok' });
    } catch (error: unknown) {
      set({ is: 'fail', error: getError(error) });
    }
  };

const change_article_status_actions: ChangeArticleStatus.Actions = {
  reject: changeStatus(rejectArticle),
  accept: changeStatus(acceptArticle),
};

export { change_article_status_actions };
