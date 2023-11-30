/* eslint-disable @typescript-eslint/no-namespace */
import type {
  FullArticleDto,
  GetArticleParams,
  ResponseError,
} from '@system/blog-api-models';

namespace ArticleStore {
  export type Idle = { is: 'idle' };
  export type Busy = { is: 'busy' };
  export type Ok = { is: 'ok'; article: FullArticleDto };
  export type Fail = { is: 'fail'; error: ResponseError };

  export type State = Idle | Busy | Ok | Fail;

  export interface Actions {
    update(article: Partial<FullArticleDto>): void;
    reset(): void;
    load(payload: GetArticleParams): Promise<FullArticleDto>;
  }

  export interface Selectors {
    useArticle: () => FullArticleDto;
  }
}

export type { ArticleStore };
