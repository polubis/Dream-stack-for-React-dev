/* eslint-disable @typescript-eslint/no-namespace */
import type {
  ArticleReviewDto,
  Id,
  ResponseError,
} from '@system/blog-api-models';

namespace ArticleReviewsStore {
  export type Idle = { is: 'idle' };
  export type Busy = { is: 'busy' };
  export type Ok = { is: 'ok'; reviews: ArticleReviewDto[] };
  export type Fail = { is: 'fail'; error: ResponseError };

  export type State = Idle | Busy | Ok | Fail;

  export interface Selectors {
    useReviews: () => ArticleReviewDto[];
  }

  export interface Actions {
    load(id: Id): Promise<void>;
    addReview(review: ArticleReviewDto): void;
    reset(): void;
  }
}

export type { ArticleReviewsStore };
