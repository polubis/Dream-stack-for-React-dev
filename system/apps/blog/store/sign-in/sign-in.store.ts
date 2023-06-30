import { create } from 'zustand';
import type { SignInStore } from './defs';
import { getError, signIn } from '@system/blog-api';
import { authorize } from '../auth';

const useSignInStore = create<SignInStore>((set) => ({
  key: 'idle',
  signIn: async (payload) => {
    set({ key: 'pending' });

    try {
      await signIn(payload);

      authorize();

      set({ key: 'ok' });
    } catch (error: unknown) {
      set({ key: 'error', response: getError(error) });
    }
  },
}));

const reset = () => {
  useSignInStore.setState({ key: 'idle' });
};

export { useSignInStore, reset };
