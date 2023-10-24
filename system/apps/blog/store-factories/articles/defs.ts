import type {
  ArticleDto,
  ArticlesParams,
  PaginatedArticlesResponse,
  ResponseError,
} from '@system/blog-api-models';
import type { Subscription } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ArticlesStore {
  export type Article = ArticleDto;
  export type Articles = Article[];
  export type Params = ArticlesParams;

  export interface State {
    loading: boolean;
    error: ResponseError | null;
    params: Params | null;
    articles: Articles | null;
    allLoaded: boolean;
  }

  export interface Actions {
    init(): Subscription;
    load(params: Params): void;
  }

  export interface Selectors {
    state(): State;
    useState(): State;
  }

  export interface CreatorConfig {
    service: (params: Params) => Promise<PaginatedArticlesResponse>;
  }
}
