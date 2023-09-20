import type { ResponseError } from '@system/blog-api-models';

type SignOutActions  = {
  signOut: () => Promise<void>;
}

type IdleState  = SignOutActions & {
  key: 'idle';
}

type PendingState  = SignOutActions &{
  key: 'pending';
}

type OkState  = SignOutActions & {
  key: 'ok';
}

type ErrorState  = SignOutActions & {
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
