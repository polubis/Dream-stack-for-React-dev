import { useArticleManagementStore } from './store';
import type * as ArticleManagement from './defs';

const { getState: get } = useArticleManagementStore;

const isActiveGuard = (
  state: ArticleManagement.State
): ArticleManagement.Active => {
  if (state.is === 'active') return state;
  throw Error(`The read attempt detected in invalid state: ${state.is}`);
};

const article_management_selectors: ArticleManagement.Selectors = {
  active: () => isActiveGuard(get()),
};

export { article_management_selectors };
