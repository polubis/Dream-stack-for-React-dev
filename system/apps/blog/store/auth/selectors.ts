import type { AuthStore } from './defs';
import { useAuthStore } from './store';

const checkIsAdmin = (state: AuthStore.State): boolean =>
  state.is === 'authorized' ? state.user.roles.includes('Admin') : false;

const auth_store_selectors: AuthStore.Selectors = {
  useIsAuthor: (username) =>
    useAuthStore(
      (state) => state.is === 'authorized' && state.user.username === username
    ),
  useIsAdmin: () => useAuthStore(checkIsAdmin),
  useIsAuthorized: () => useAuthStore((state) => state.is === 'authorized'),
  useState: () => useAuthStore(),
};

export { auth_store_selectors };
