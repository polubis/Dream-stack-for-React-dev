interface AuthStorage {
  authorized: boolean;
}

interface AuthActions {
  check: () => void;
}

interface IdleState extends AuthActions {
  key: 'idle';
}

interface AuthorizedState extends AuthActions {
  key: 'authorized';
}

interface UnauthorizedState extends AuthActions {
  key: 'unauthorized';
}

type AuthState = IdleState | AuthorizedState | UnauthorizedState;

type AuthStore = AuthState & AuthActions;

type AuthStoreStateKey = AuthState['key'];

export type {
  AuthStore,
  AuthActions,
  AuthState,
  AuthStorage,
  IdleState,
  AuthorizedState,
  UnauthorizedState,
  AuthStoreStateKey,
};
