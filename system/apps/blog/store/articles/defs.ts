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
  yours: boolean;
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
  reset(): void;
  init(filters?: Partial<Filters>): void;
  changeQuery(query: Filters['query']): void;
  loadMore(): void;
}

interface States {
  idle(): Idle;
  busy(): Busy;
  ok(articles: ArticleDto[], filters?: Partial<Filters>): Ok;
  filters(filters?: Partial<Filters>): Filters;
}

interface Selectors {
  articles(): ArticleDto[];
}

export type {
  Filters,
  LoadPayload,
  Idle,
  Ok,
  Busy,
  Fail,
  States,
  Loading,
  State,
  AllLoaded,
  Actions,
  Selectors,
};
