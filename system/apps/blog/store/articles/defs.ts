/* eslint-disable @typescript-eslint/no-namespace */

import type {
  ArticleDto,
  ArticlesParams,
  Lang,
  ResponseError,
} from '@system/blog-api-models';

namespace ArticlesStore {
  export type Filters = ArticlesParams;
  export type Article = ArticleDto;
  export type Articles = Article[];

  export interface Idle {
    is: 'idle';
    defaultFilters: Filters;
  }

  export interface Loading {
    is: 'loading';
    filters: Filters;
    defaultFilters: Filters;
  }

  export interface LoadingMore {
    is: 'loading-more';
    articles: Articles;
    filters: Filters;
    defaultFilters: Filters;
  }

  export interface LoadingFail {
    is: 'loading-fail';
    error: ResponseError;
    filters: Filters;
    defaultFilters: Filters;
  }

  export interface LoadingMoreFail {
    is: 'loading-more-fail';
    error: ResponseError;
    articles: Articles;
    filters: Filters;
    defaultFilters: Filters;
  }

  export interface Loaded {
    is: 'loaded';
    articles: Articles;
    filters: Filters;
    defaultFilters: Filters;
  }

  export interface AllLoaded {
    is: 'all-loaded';
    articles: Articles;
    filters: Filters;
    defaultFilters: Filters;
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
    syncFromClient(lang: Lang, yours: boolean): void;
    syncFromServer(filters: Filters, articles: Articles): void;
    load(filters: Partial<Filters>): void;
  }

  export interface Selectors {
    useSafeState(): SafeState;
    safeState(): SafeState;
    useState(): State;
    state(): State;
  }

  export interface Factories {
    defaultFilters(lang: Lang, yours: boolean): Filters;
  }
}

export type { ArticlesStore };
