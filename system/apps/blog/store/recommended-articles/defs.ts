import type { ArticleDto, ResponseError } from '@system/blog-api-models';

type RecommendedArticlesActions =  {
  load: () => Promise<void>;
}

type RecommendedArticlesState =  {
  key: 'idle' | 'pending' | 'ok' | 'error';
  articles: ArticleDto[];
  error: ResponseError | null;
}

type RecommendedArticlesStore = RecommendedArticlesState &
  RecommendedArticlesActions;

type RecommendedArticlesStateKey = RecommendedArticlesState['key'];

export type {
  RecommendedArticlesStore,
  RecommendedArticlesState,
  RecommendedArticlesStateKey,
};
