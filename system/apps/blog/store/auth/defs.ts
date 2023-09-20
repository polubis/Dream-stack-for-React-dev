import type { SignedInUserDto, Username } from '@system/blog-api-models';

type NullableSignedInUser = SignedInUserDto | null;

type AuthStorage = {
  user: NullableSignedInUser;
};

type AuthActions = {
  check: () => void;
};

type AuthState = {
  key: 'idle' | 'authorized' | 'unauthorized';
  user: NullableSignedInUser;
};

type AuthStore = AuthState & AuthActions;

type AuthStoreStateKey = AuthState['key'];

type AuthSelectors = {
  useIsAuthor: (username: Username) => boolean;
};

export type {
  AuthStore,
  AuthActions,
  AuthState,
  AuthStorage,
  AuthStoreStateKey,
  NullableSignedInUser,
  AuthSelectors,
};
