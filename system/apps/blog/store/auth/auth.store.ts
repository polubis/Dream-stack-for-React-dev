import { create } from 'zustand';
import type { AuthStorage, AuthStore } from './defs';
import { storage } from '@system/utils';
import type { SignedInUser } from '@system/blog-api';

const authStorage = storage<AuthStorage>();

const useAuthStore = create<AuthStore>((set) => ({
  key: 'idle',
  user: null,
  check: () => {
    const user = authStorage.get('user');

    if (user) {
      set({ key: 'authorized', user });
    } else {
      set({ key: 'unauthorized' });
    }
  },
}));

const authorize = (user: SignedInUser): void => {
  authStorage.set('user', user);
  useAuthStore.setState({ key: 'authorized', user });
};

const unauthorize = (): void => {
  authStorage.set('user', null);
  useAuthStore.setState({ key: 'unauthorized', user: null });
};

export { useAuthStore, authorize, unauthorize };
