import { AuthSelectors } from './defs';
import { useAuthStore } from './store';

const auth_selectors: AuthSelectors = {
  useIsAuthor: (username) => {
    return useAuthStore((state) => {
      return state.key === 'authorized' && state.user.username === username;
    });
  },
};

export { auth_selectors };
