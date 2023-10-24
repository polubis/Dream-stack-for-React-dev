/* eslint-disable react-hooks/rules-of-hooks */
import {
  admin_articles_actions,
  admin_articles_selectors,
} from '../../store/admin-articles';
import { useArticlesFiltering } from '../../core/articles';

const useAdminArticles = useArticlesFiltering({
  selectors: admin_articles_selectors,
  actions: admin_articles_actions,
});

export { useAdminArticles };
