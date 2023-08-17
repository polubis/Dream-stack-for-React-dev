import { create } from 'zustand';
import type { AuthStorage, AuthStore } from './defs';
import { storage } from '@system/utils';
import type { SignedInUserDto } from '@system/blog-api-models';

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

const authorize = (user: SignedInUserDto): void => {
  authStorage.set('user', user);
  useAuthStore.setState({ key: 'authorized', user });
};

const unauthorize = (): void => {
  authStorage.set('user', null);
  useAuthStore.setState({ key: 'unauthorized', user: null });
};

const checkIsAdmin = (state: AuthStore): boolean =>
  state.key === 'authorized' ? state.user.roles.includes('Admin') : false;

export { useAuthStore, authorize, unauthorize, checkIsAdmin };
