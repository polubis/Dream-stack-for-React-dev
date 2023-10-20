import type { YourArticlesStore } from './defs';
import { useYourArticlesStore } from './your-articles.store';

const your_articles_selectors: YourArticlesStore.Selectors = {
  state: () => useYourArticlesStore.getState(),
  useState: () => useYourArticlesStore(state => state),
};

export { your_articles_selectors };
