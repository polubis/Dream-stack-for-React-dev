/* eslint-disable react-hooks/rules-of-hooks */
import { useArticlesFiltering } from '../../core/articles';
import {
  your_articles_actions,
  your_articles_selectors,
} from '../../store/your-articles';

const useYourArticles = useArticlesFiltering({
  selectors: your_articles_selectors,
  actions: your_articles_actions,
});

export { useYourArticles };
