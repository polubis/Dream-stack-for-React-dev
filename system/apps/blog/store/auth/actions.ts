import { type AuthStore } from './defs';
import { useAuthStore } from './store';
import { authStorage } from './core';
import { articles_store_actions } from '../articles';
import { sign_in_store_actions } from '../sign-in';

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
    articles_store_actions.reset();
    sign_in_store_actions.reset();
  },
};

export { auth_store_actions };
