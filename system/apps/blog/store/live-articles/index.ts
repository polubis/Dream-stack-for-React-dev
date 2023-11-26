import { getArticles } from '@system/blog-api';
import { createArticlesStore } from '../../store-factories/articles';

const [useLiveArticlesStore, live_articles_actions, live_articles_selectors] =
  createArticlesStore({ service: getArticles });

export { useLiveArticlesStore, live_articles_actions, live_articles_selectors };
