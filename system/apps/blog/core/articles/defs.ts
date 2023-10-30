import type { ArticlesStore } from '../../store-factories/articles';
import type { Id, Url } from '@system/blog-api-models';

interface ArticlesFilteringConfig {
  selectors: ArticlesStore.Selectors;
  actions: ArticlesStore.Actions;
}

interface ArticleParams {
  url: Url;
  id: Id;
}
export type { ArticlesFilteringConfig, ArticleParams };
