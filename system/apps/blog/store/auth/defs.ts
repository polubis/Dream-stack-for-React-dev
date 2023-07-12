import type { SignedInUserDto } from '@system/blog-api-models';

type NullableSignedInUser = SignedInUserDto | null;

interface AuthStorage {
  user: NullableSignedInUser;
}

interface AuthActions {
  check: () => void;
}

interface AuthState {
  key: 'idle' | 'authorized' | 'unauthorized';
  user: NullableSignedInUser;
}

type AuthStore = AuthState & AuthActions;

type AuthStoreStateKey = AuthState['key'];

export type {
  AuthStore,
  AuthActions,
  AuthState,
  AuthStorage,
  AuthStoreStateKey,
  NullableSignedInUser,
};
