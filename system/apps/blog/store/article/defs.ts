/* eslint-disable @typescript-eslint/no-namespace */
import type { ArticleDto, ResponseError } from '@system/blog-api-models';

namespace Article {
  export type Idle = { is: 'idle' };
  export type Loading = { is: 'loading' };
  export type Loaded = { is: 'loaded'; article: ArticleDto };
  export type LoadFail = { is: 'load-fail'; error: ResponseError };

  export type State = Idle | Loading | Loaded | LoadFail;
}

export type { Article };
