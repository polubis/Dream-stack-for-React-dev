/* eslint-disable @typescript-eslint/no-namespace */
import type {
  ArticleReviewDto,
  Id,
  ResponseError,
} from '@system/blog-api-models';

type Idle = { is: 'idle' };
type Busy = { is: 'busy' };
type Ok = { is: 'ok'; reviews: ArticleReviewDto[] };
type Fail = { is: 'fail'; error: ResponseError };

type State = Idle | Busy | Ok | Fail;

interface Actions {
  load(id: Id): Promise<void>;
}

export type { State, Idle, Busy, Fail, Actions };
