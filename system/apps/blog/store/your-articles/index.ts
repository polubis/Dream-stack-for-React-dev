import { getYourArticles } from '@system/blog-api';
import { createArticlesStore } from '../../store-factories/articles';

const [useYourArticlesStore, your_articles_selectors, your_articles_actions] =
  createArticlesStore({ service: getYourArticles });

export { useYourArticlesStore, your_articles_selectors, your_articles_actions };
