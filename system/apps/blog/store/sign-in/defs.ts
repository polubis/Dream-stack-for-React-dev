import type { ResponseError, SignInPayload } from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace SignInStore {
  export interface Actions {
    reset(): void;
    signIn(payload: SignInPayload): Promise<void>;
  }

  export interface State {
    is: 'idle' | 'busy' | 'ok' | 'fail';
    error: ResponseError | null;
  }

  export type Is = State['is'];
}

export type { SignInStore };
