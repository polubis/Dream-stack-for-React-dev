/* eslint-disable @typescript-eslint/no-namespace */
import type {
  ArticleDto,
  GetArticlesParams,
  Lang,
  ResponseError,
} from '@system/blog-api-models';

namespace ArticlesStore {
  export type Filters = {
    limit: GetArticlesParams['ItemsPerPage'];
    query: GetArticlesParams['Search'];
    page: GetArticlesParams['CurrentPage'];
    status: GetArticlesParams['Status'];
    lang: Lang;
    yours: boolean;
  };

  export type LoadPayload = Partial<Filters>;

  export interface Idle {
    is: 'idle';
    filters: Filters;
  }
  export interface Busy {
    is: 'busy';
    filters: Filters;
  }
  export interface Loading {
    is: 'loading';
    filters: Filters;
    articles: ArticleDto[];
  }
  export interface Ok {
    is: 'ok';
    articles: ArticleDto[];
    filters: Filters;
  }
  export interface AllLoaded {
    is: 'all_loaded';
    articles: ArticleDto[];
    filters: Filters;
  }
  export interface Fail {
    is: 'fail';
    error: ResponseError;
    filters: Filters;
  }

  export type State = Idle | Busy | Ok | Loading | AllLoaded | Fail;

  export interface Actions {
    reset(): void;
    init(filters?: Partial<Filters>): void;
    changeQuery(query: Filters['query']): void;
    loadMore(): void;
  }

  export interface States {
    idle(): Idle;
    busy(): Busy;
    ok(articles: ArticleDto[], filters?: Partial<Filters>): Ok;
    filters(filters?: Partial<Filters>): Filters;
  }

  export interface Selectors {
    articles(): ArticleDto[];
  }
}

export type { ArticlesStore };
