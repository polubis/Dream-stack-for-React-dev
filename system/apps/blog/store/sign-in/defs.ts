import type { ResponseError, SignInPayload } from '@system/blog-api';

interface SignInActions {
  signIn: (payload: SignInPayload) => Promise<void>;
}

interface IdleState extends SignInActions {
  key: 'idle';
}

interface PendingState extends SignInActions {
  key: 'pending';
}

interface OkState extends SignInActions {
  key: 'ok';
}

interface ErrorState extends SignInActions {
  key: 'error';
  response: ResponseError;
}

type SignInState = IdleState | PendingState | ErrorState | OkState;

type SignInStore = SignInState & SignInActions;

type SignInStateKey = SignInState['key'];

export type {
  SignInStore,
  SignInActions,
  SignInState,
  SignInStateKey,
  IdleState,
  OkState,
  PendingState,
  ErrorState,
};
