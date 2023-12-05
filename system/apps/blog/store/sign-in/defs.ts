import type { ResponseError, SignInPayload } from '@system/blog-api-models';
import type { FormState } from '@system/utils';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace SignInStore {
  export type FormData = SignInPayload;
  export type Form = FormState<FormData>;

  export interface Actions {
    reset(): void;
    setField<K extends keyof FormData, V extends FormData[K]>(
      key: K,
      value: V
    ): void;
    submit(): Promise<void>;
  }

  export interface Idle {
    is: 'idle';
  }

  export interface Busy {
    is: 'busy';
  }

  export interface Ok {
    is: 'ok';
  }

  export interface Fail {
    is: 'fail';
    error: ResponseError;
  }

  export type State = (Idle | Busy | Ok | Fail) & { form: Form };

  export type Is = State['is'];
}

export type { SignInStore };
