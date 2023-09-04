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

interface Idle {
  is: 'idle';
  filters: Filters;
}
interface Busy {
  is: 'busy';
  filters: Filters;
}
interface Loading {
  is: 'loading';
  filters: Filters;
  articles: ArticleDto[];
}
interface Ok {
  is: 'ok';
  articles: ArticleDto[];
  filters: Filters;
}
interface AllLoaded {
  is: 'all_loaded';
  articles: ArticleDto[];
  filters: Filters;
}
interface Fail {
  is: 'fail';
  error: ResponseError;
  filters: Filters;
}

type State = Idle | Busy | Ok | Loading | AllLoaded | Fail;

interface Actions {
  init(): void;
  changeQuery(query: Filters['query']): void;
  loadMore(): void;
}

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
