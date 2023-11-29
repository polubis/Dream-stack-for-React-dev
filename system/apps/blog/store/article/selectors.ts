import type { ArticleStore } from './defs';
import { useArticleStore } from './store';

const article_selectors: ArticleStore.Selectors = {
  useArticle: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useArticleStore((state) => {
      if (state.is === 'ok') return state.article;
      throw Error(`The read attempt detected in invalid state: ${state.is}`);
    });
  },
};

export { article_selectors };
