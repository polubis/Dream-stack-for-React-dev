import type {
  CreateArticleReviewPayload,
  CreateArticleReviewResponse,
  ResponseError,
} from '@system/blog-api-models';
import type { FormState } from '@system/utils';

type FormData = Pick<CreateArticleReviewPayload, 'content'>;
type Form = FormState<FormData>;

type Idle = { is: 'idle'; form: Form };
type Busy = { is: 'busy'; form: Form };
type Ok = { is: 'ok'; form: Form };
type Fail = { is: 'fail'; error: ResponseError; form: Form };

type State = Idle | Busy | Ok | Fail;

interface Actions {
  setField<K extends keyof FormData>(key: K, value: FormData[K]): void;
  confirm(
    id: CreateArticleReviewPayload['id']
  ): Promise<CreateArticleReviewResponse>;
}

export type { Actions, State, FormData, Form };
