import type { AuthStore } from './defs';
import { useAuthStore } from './store';

const checkIsAdmin = (state: AuthStore.State): boolean =>
  state.key === 'authorized' ? state.user.roles.includes('Admin') : false;

const auth_store_selectors: AuthStore.Selectors = {
  useIsAuthor: (username) =>
    useAuthStore(
      (state) => state.key === 'authorized' && state.user.username === username
    ),
  useIsAdmin: () => useAuthStore(checkIsAdmin),
  useIsAuthorized: () => useAuthStore((state) => state.key === 'authorized'),
  useState: () => useAuthStore(),
};

export { auth_store_selectors };
