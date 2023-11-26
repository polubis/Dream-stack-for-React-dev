import type {
  ArticleDto,
  ArticlesParams,
  PaginatedArticlesResponse,
  ResponseError,
} from '@system/blog-api-models';
import type { Subscription } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ArticlesStore {
  //   export type Article = ArticleDto;
  //   export type Articles = Article[];
  //   export type Params = ArticlesParams;

  // export interface State {
  //   loading: boolean;
  //   error: ResponseError | null;
  //   params: Params | null;
  //   articles: Articles | null;
  //   allLoaded: boolean;
  // }

  // export interface Actions {
  //   init(): Subscription;
  //   load(params: Params): void;
  //   reset(): void;
  // }

  // export interface Selectors {
  //   state(): State;
  //   useState(): State;
  // }

  // export interface CreatorConfig {
  //   service: (params: Params) => Promise<PaginatedArticlesResponse>;
  // }

  export type Article = ArticleDto;
  export type Articles = Article[];
  export type Params = ArticlesParams;

  export interface ParamsState {
    current: Params;
    previous: Params;
  }

  // Nothing happened yet.
  export interface Idle {
    is: 'idle';
  }

  // Initial loading...
  export interface Loading {
    is: 'loading';
  }

  export interface LoadingMore {
    is: 'loading_more';
  }

  export interface Loaded {
    is: 'loaded';
    articles: Articles;
  }

  export interface Changing {
    is: 'changing';
  }

  export interface LoadedAll {
    is: 'loaded_all';
  }

  export interface LoadingMoreFail {
    is: 'load_more_fail';
    error: ResponseError;
  }

  export interface LoadingFail {
    is: 'load_fail';
    error: ResponseError;
  }

  export interface ChangingFail {
    is: 'changing_fail';
    error: ResponseError;
  }

  export type State = (
    | Idle
    | Loading
    | LoadingMore
    | Loaded
    | Changing
    | LoadedAll
    | LoadingMoreFail
    | LoadingFail
    | ChangingFail
  ) &
    ParamsState;

  export interface Actions {
    load(): void;
  }

  export type Store = State & Actions;

  export interface Config {
    state?: State;
    service(params: Params): Promise<PaginatedArticlesResponse>;
  }
}
