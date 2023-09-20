/* eslint-disable @typescript-eslint/no-namespace */
import type {
  ArticleDto,
  GetArticlesParams,
  Lang,
  ResponseError,
} from '@system/blog-api-models';

type Filters = {
  limit: GetArticlesParams['ItemsPerPage'];
  query: GetArticlesParams['Search'];
  page: GetArticlesParams['CurrentPage'];
  status: GetArticlesParams['Status'];
  lang: Lang;
};

type LoadPayload = Partial<Filters>;

type Idle = {
  is: 'idle';
  filters: Filters;
};
type Busy = {
  is: 'busy';
  filters: Filters;
};
type Loading = {
  is: 'loading';
  filters: Filters;
  articles: ArticleDto[];
};
type Ok = {
  is: 'ok';
  articles: ArticleDto[];
  filters: Filters;
};
type AllLoaded = {
  is: 'all_loaded';
  articles: ArticleDto[];
  filters: Filters;
};
type Fail = {
  is: 'fail';
  error: ResponseError;
  filters: Filters;
};

type State = Idle | Busy | Ok | Loading | AllLoaded | Fail;

type Actions = {
  init(): void;
  changeQuery(query: Filters['query']): void;
  loadMore(): void;
};

export type {
  Filters,
  LoadPayload,
  Idle,
  Ok,
  Busy,
  Fail,
  Loading,
  State,
  AllLoaded,
  Actions,
};
