interface AuthStorage {
  authorized: boolean;
}

interface AuthActions {
  check: () => void;
}

interface IdleState {
  key: 'idle';
}

interface AuthorizedState {
  key: 'authorized';
}

interface UnauthorizedState {
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
