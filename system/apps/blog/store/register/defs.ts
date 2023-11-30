import type { RegisterPayload, ResponseError } from '@system/blog-api-models';
import type { FormState } from '@system/utils';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace RegisterStore {
  export type FormData = RegisterPayload;
  export type Form = FormState<FormData>;

  export interface Actions {
    setField<K extends keyof FormData, V extends FormData[K]>(
      key: K,
      value: V
    ): void;
    submit(): Promise<void>;
  }

  export interface State {
    is: 'idle' | 'busy' | 'ok' | 'fail';
    form: Form;
    error: ResponseError | null;
  }

  export type Is = State['is'];
}

export type { RegisterStore };
