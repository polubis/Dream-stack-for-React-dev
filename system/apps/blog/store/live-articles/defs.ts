/* eslint-disable @typescript-eslint/no-namespace */
import type {
  ArticleDto,
  GetArticlesParams,
  ResponseError,
} from '@system/blog-api-models';

type StateVariant<
  Is extends string,
  Data extends Record<string | number | symbol, unknown> | undefined = undefined
> = Data extends undefined ? { is: Is } : { is: Is } & Data;

export namespace LiveArticlesStore {
  export type Article = ArticleDto;
  export type ArticleCollection = Article[];
  export type Busy = StateVariant<'busy'>;
  export type Ok = StateVariant<
    'ok',
    { articles: ArticleCollection; allLoaded: boolean }
  >;
  export type Loading = StateVariant<
    'loading',
    { articles: ArticleCollection; allLoaded: boolean }
  >;
  export type Fail = StateVariant<'fail', { error: ResponseError }>;
  export type State = Busy | Ok | Loading | Fail;

  export interface Actions {
    initialize(params: GetArticlesParams): Promise<void>;
    loadMore(params: GetArticlesParams): Promise<void>;
  }

  export interface Selectors {
    articles(): ArticleCollection;
    allLoaded(): boolean;
    is(is: State['is']): boolean;
    useState(): State;
  }
}
