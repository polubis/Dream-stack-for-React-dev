import type { ResponseError } from '@system/blog-api';

interface SignOutActions {
  signOut: () => Promise<void>;
}

interface IdleState extends SignOutActions {
  key: 'idle';
}

interface PendingState extends SignOutActions {
  key: 'pending';
}

interface OkState extends SignOutActions {
  key: 'ok';
}

interface ErrorState extends SignOutActions {
  key: 'error';
  response: ResponseError;
}

type SignOutState = IdleState | PendingState | ErrorState | OkState;

type SignOutStateKey = SignOutState['key'];

type SignOutStore = SignOutState & SignOutActions;

export type {
  SignOutStore,
  SignOutActions,
  SignOutState,
  SignOutStateKey,
  IdleState,
  PendingState,
  OkState,
  ErrorState,
};
