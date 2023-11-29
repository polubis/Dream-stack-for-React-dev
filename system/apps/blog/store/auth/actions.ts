import { getError } from '@system/blog-api';
import { type AuthStore } from './defs';
import { useAuthStore } from './store';
import { authStorage } from './core';
import { SignedInUserDto } from '@system/blog-api-models';

const { setState } = useAuthStore;

const set = (state: AuthStore.State): void => {
  setState(state, true);
};

const auth_store_actions: AuthStore.Actions = {
  check: () => {
    const user = authStorage.get('user');

    if (user) {
      set({ key: 'authorized', user });
      return;
    }

    set({ key: 'unauthorized', user: null });
  },
  authorize: (user) => {
    authStorage.set('user', user);
    useAuthStore.setState({ key: 'authorized', user });
  },
  unauthorize: () => {
    authStorage.set('user', null);
    useAuthStore.setState({ key: 'unauthorized', user: null });
  },
};

export { auth_store_actions };
