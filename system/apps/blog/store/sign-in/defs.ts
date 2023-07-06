import type { ResponseError, SignInPayload } from '@system/blog-api';

interface SignInActions {
  signIn: (payload: SignInPayload) => Promise<void>;
}

interface IdleState {
  key: 'idle';
}

interface PendingState {
  key: 'pending';
}

interface OkState {
  key: 'ok';
}

interface ErrorState {
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
