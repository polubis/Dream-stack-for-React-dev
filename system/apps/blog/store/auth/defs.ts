import type { SignedInUserDto, Username } from '@system/blog-api-models';

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

interface AuthSelectors {
  useIsAuthor(username: Username): boolean;
  useIsAdmin(): boolean;
  useIsAuthorized(): boolean;
}

export type {
  AuthStore,
  AuthActions,
  AuthState,
  AuthStorage,
  AuthStoreStateKey,
  NullableSignedInUser,
  AuthSelectors,
};
