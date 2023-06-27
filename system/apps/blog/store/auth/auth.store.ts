import { create } from 'zustand';
import type { AuthStorage, AuthStore } from './defs';
import { storage } from '@system/utils';

const authStorage = storage<AuthStorage>();

const useAuthStore = create<AuthStore>((set) => ({
  key: 'idle',
  check: () => {
    const authorized = authStorage.get('authorized');

    if (authorized) {
      set({ key: 'authorized' });
    } else {
      set({ key: 'unauthorized' });
    }
  },
}));

const authorize = () => {
  authStorage.set('authorized', true);
  useAuthStore.setState({ key: 'authorized' });
};

const unauthorize = () => {
  authStorage.set('authorized', false);
  useAuthStore.setState({ key: 'unauthorized' });
};

export { useAuthStore, authorize, unauthorize };
