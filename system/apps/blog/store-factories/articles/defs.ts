import type {
  ArticleDto,
  ArticlesParams,
  PaginatedArticlesResponse,
  ResponseError,
} from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ArticlesStore {
  export type Article = ArticleDto;
  export type Articles = Article[];
  export type Params = ArticlesParams;

  export interface ParamsState {
    params: Params;
    initialParams: Params;
    previousParams: Params;
  }

  export interface Idle {
    is: 'idle';
  }

  export interface Loading extends ParamsState {
    is: 'loading';
  }

  export interface LoadingMore extends ParamsState {
    is: 'loading_more';
    articles: Articles;
  }

  export interface Loaded extends ParamsState {
    is: 'loaded';
    articles: Articles;
  }

  export interface Changing extends ParamsState {
    is: 'changing';
    articles: Articles;
  }

  export interface LoadedAll extends ParamsState {
    is: 'loaded_all';
    articles: Articles;
  }

  export interface LoadingMoreFail extends ParamsState {
    is: 'load_more_fail';
    error: ResponseError;
  }

  export interface LoadingFail extends ParamsState {
    is: 'loading_fail';
    error: ResponseError;
  }

  export interface ChangingFail extends ParamsState {
    is: 'changing_fail';
    error: ResponseError;
  }

  export type State =
    | Idle
    | Loading
    | LoadingMore
    | Loaded
    | Changing
    | LoadedAll
    | LoadingMoreFail
    | LoadingFail
    | ChangingFail;

  export type SafeState = Exclude<State, { is: 'idle' }>;

  export interface Actions {
    sync(params: Params, articles: Articles): void;
    load(params: Params): void;
    loadMore(): void;
    change(params: Partial<Params>): void;
    reset(): void;
  }

  export interface Selectors {
    state(): State;
    useState(): State;
    safeState(): SafeState;
    useSafeState(): SafeState;
    articles(): Articles;
  }

  export type Store = State & Actions;

  export interface Config {
    service(params: Params): Promise<PaginatedArticlesResponse>;
  }
}
