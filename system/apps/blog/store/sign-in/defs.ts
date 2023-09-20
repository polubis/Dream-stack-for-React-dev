import type { ResponseError, SignInPayload } from '@system/blog-api-models';

type SignInActions = {
  signIn: (payload: SignInPayload) => Promise<void>;
};

type SignInState = {
  key: 'idle' | 'pending' | 'ok' | 'error';
  error: ResponseError | null;
};

type SignInStore = SignInState & SignInActions;

type SignInStateKey = SignInState['key'];

export type { SignInStore, SignInActions, SignInState, SignInStateKey };
