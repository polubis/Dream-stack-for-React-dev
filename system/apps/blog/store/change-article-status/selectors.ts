import type { ChangeArticleStatusStore } from './defs';
import { useChangeArticleStatusStore } from './store';

const change_article_status_store_selectors: ChangeArticleStatusStore.Selectors =
  {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useIs: () => useChangeArticleStatusStore((state) => state.is),
  };

export { change_article_status_store_selectors };
