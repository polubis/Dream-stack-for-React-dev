import { useChangeArticleStatusStore } from './store';
import type * as ChangeArticleStatus from './defs';

const change_article_status_selectors: ChangeArticleStatus.Selectors = {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useIs: () => useChangeArticleStatusStore((state) => state.is),
};

export { change_article_status_selectors };
