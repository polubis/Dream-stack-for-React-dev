import type {
  ArticleDto,
  GetYourArticlesParams,
  ResponseError,
} from '@system/blog-api-models';
import type { Subscription } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace YourArticlesStore {
  export type Article = ArticleDto;
  export type Articles = Article[];
  export type Params = GetYourArticlesParams;

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
}
