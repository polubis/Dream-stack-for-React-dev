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

export type { AuthStore, AuthActions, AuthState };
