import type { ResponseError, SignInPayload } from '@system/blog-api-models';

interface SignInActions {
  signIn: (payload: SignInPayload) => Promise<void>;
}

interface SignInState {
  key: 'idle' | 'pending' | 'ok' | 'error';
  error: ResponseError | null;
}

type SignInStore = SignInState & SignInActions;

type SignInStateKey = SignInState['key'];

export type { SignInStore, SignInActions, SignInState, SignInStateKey };
