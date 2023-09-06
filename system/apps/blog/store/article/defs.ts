/* eslint-disable @typescript-eslint/no-namespace */
import type { FullArticleDto, ResponseError } from '@system/blog-api-models';

namespace Article {
  export type Idle = { is: 'idle' };
  export type Busy = { is: 'busy' };
  export type Ok = { is: 'ok'; article: FullArticleDto };
  export type Fail = { is: 'fail'; error: ResponseError };

  export type State = Idle | Busy | Ok | Fail;
}

export type { Article };
