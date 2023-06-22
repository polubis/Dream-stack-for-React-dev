import { create } from 'zustand';
import type { AuthStore } from './defs';
import { authStorage } from '../../storages/auth';

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
