import { useArticleManagementStore } from './store';
import type * as ArticleManagement from './defs';

const { getState: get } = useArticleManagementStore;

const article_management_selectors: ArticleManagement.Selectors = {
  active: () => {
    const state = get();

    if (state.is === 'active') return state;

    throw Error(`The read attempt detected in invalid state: ${state.is}`);
  },
};

export { article_management_selectors };
