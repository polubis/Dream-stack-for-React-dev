/* eslint-disable @typescript-eslint/no-namespace */
import type {
  CreateArticleReviewPayload,
  CreateArticleReviewResponse,
  ResponseError,
} from '@system/blog-api-models';
import type { FormState } from '@system/utils';

namespace AddArticleReviewStore {
  export type FormData = Pick<CreateArticleReviewPayload, 'content'>;
  export type Form = FormState<FormData>;

  export type Idle = { is: 'idle' };
  export type Busy = { is: 'busy' };
  export type Ok = { is: 'ok' };
  export type Fail = {
    is: 'fail';
    error: ResponseError;
  };

  export type State = (Idle | Busy | Ok | Fail) & { form: Form };

  export interface Actions {
    setField<K extends keyof FormData>(key: K, value: FormData[K]): void;
    confirm(
      id: CreateArticleReviewPayload['id']
    ): Promise<CreateArticleReviewResponse>;
  }

  export interface Selectors {
    useState(): State;
  }
}

export type { AddArticleReviewStore };
