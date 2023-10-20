import type {
  ArticleDto,
  GetYourArticlesParams,
  ResponseError,
} from '@system/blog-api-models';

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
  }

  export interface Actions {
    load(params: Params): Promise<void>;
    loadMore(params: Params): Promise<void>;
  }

  export interface Selectors {
    state(): State;
    useState(): State;
  }
}
