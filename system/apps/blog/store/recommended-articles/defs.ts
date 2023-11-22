/* eslint-disable @typescript-eslint/no-namespace */
import type {
  ArticleDto,
  GetArticlesParams,
  Lang,
  ResponseError,
} from '@system/blog-api-models';

namespace RecommendedArticlesStore {
  export interface Idle {
    is: 'idle';
  }

  export interface Busy {
    is: 'busy';
  }

  export interface Ok {
    is: 'ok';
    articles: ArticleDto[];
  }

  export interface Fail {
    is: 'fail';
    error: ResponseError;
  }

  export type State = Idle | Busy | Ok | Fail;

  export interface Actions {
    load(limit: GetArticlesParams['ItemsPerPage'], lang: Lang): Promise<void>;
  }
}

export type { RecommendedArticlesStore };
