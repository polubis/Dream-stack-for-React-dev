/* eslint-disable @typescript-eslint/no-namespace */

import type {
  ArticleDto,
  ArticlesParams,
  ResponseError,
} from '@system/blog-api-models';

namespace ArticlesStore {
  export type Filters = ArticlesParams;
  export type Article = ArticleDto;
  export type Articles = Article[];

  export interface Idle {
    is: 'idle';
  }

  export interface Loading {
    is: 'loading';
    filters: Filters;
  }

  export interface LoadingMore {
    is: 'loading-more';
    articles: Articles;
    filters: Filters;
  }

  export interface LoadingFail {
    is: 'loading-fail';
    error: ResponseError;
    filters: Filters;
  }

  export interface LoadingMoreFail {
    is: 'loading-more-fail';
    error: ResponseError;
    articles: Articles;
    filters: Filters;
  }

  export interface Loaded {
    is: 'loaded';
    articles: Articles;
    filters: Filters;
  }

  export interface AllLoaded {
    is: 'all-loaded';
    articles: Articles;
    filters: Filters;
  }

  type UnsafeState = Idle;
  type SafeState =
    | Loading
    | LoadingMore
    | LoadingFail
    | LoadingMoreFail
    | Loaded
    | AllLoaded;

  export type State = UnsafeState | SafeState;

  export interface Actions {
    sync(filters: Filters, articles: Articles): void;
  }

  export interface Selectors {
    useSafeState(): SafeState;
  }
}

export type { ArticlesStore };
