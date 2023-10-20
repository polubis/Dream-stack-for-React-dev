import type {
  ArticleDto,
  GetYourArticlesParams,
  ResponseError,
} from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace YourArticlesStore {
  export type Article = ArticleDto;
  export type Articles = Article[];
  export type Params = GetYourArticlesParams;

  export interface IdleState {
    is: 'idle';
  }

  export interface SafeState {
    is: 'safe';
    loading: boolean;
    error: ResponseError | null;
    params: Params;
    articles: Articles;
  }

  export type State = IdleState | SafeState;

  export interface Actions {
    load(params: Params): Promise<void>;
    loadMore(params: Params): Promise<void>;
  }

  export interface Selectors {
    safeState(): SafeState;
    useSafeState(): SafeState;
  }
}
