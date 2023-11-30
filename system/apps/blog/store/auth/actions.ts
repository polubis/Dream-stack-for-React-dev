import { type AuthStore } from './defs';
import { useAuthStore } from './store';
import { authStorage } from './core';

const { setState } = useAuthStore;

const set = (state: AuthStore.State): void => {
  setState(state, true);
};

const auth_store_actions: AuthStore.Actions = {
  check: () => {
    const user = authStorage.get('user');

    if (user) {
      set({ is: 'authorized', user });
      return;
    }

    set({ is: 'unauthorized', user: null });
  },
  authorize: (user) => {
    authStorage.set('user', user);
    useAuthStore.setState({ is: 'authorized', user });
  },
  unauthorize: () => {
    authStorage.set('user', null);
    useAuthStore.setState({ is: 'unauthorized', user: null });
  },
};

export { auth_store_actions };
