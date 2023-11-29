import {
  acceptArticle,
  getError,
  rejectArticle,
  sendArticleForApproval,
} from '@system/blog-api';
import { useChangeArticleStatusStore } from './store';
import type { Id, Parametrized } from '@system/blog-api-models';
import type { ChangeArticleStatusStore } from './defs';

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

const change_article_status_store_actions: ChangeArticleStatusStore.Actions = {
  reject: changeStatus(rejectArticle),
  accept: changeStatus(acceptArticle),
  sendForApproval: changeStatus(sendArticleForApproval),
};

export { change_article_status_store_actions };
