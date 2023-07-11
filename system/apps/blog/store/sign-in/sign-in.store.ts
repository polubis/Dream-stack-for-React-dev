import { create } from 'zustand';
import type { SignInStore } from './defs';
import { getError, signIn } from '@system/blog-api';
import { authorize } from '../auth';

const useSignInStore = create<SignInStore>((set) => ({
  key: 'idle',
  error: null,
  signIn: async (payload) => {
    set({ key: 'pending' });

    try {
      const { data } = await signIn(payload);

      authorize(data);

      set({ key: 'ok' });
    } catch (error: unknown) {
      set({ key: 'error', error: getError(error) });
    }
  },
}));

const reset = (): void => {
  useSignInStore.setState({ key: 'idle' });
};

export { useSignInStore, reset };
