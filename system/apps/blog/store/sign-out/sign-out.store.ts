import { create } from 'zustand';
import type { SignOutStore } from './defs';
import { signOut, getError } from '@system/blog-api';
import { unauthorize } from '../auth';
import { reset } from '../sign-in';

const useSignOutStore = create<SignOutStore>((set) => ({
  key: 'idle',
  signOut: async () => {
    set({ key: 'pending' });

    try {
      await signOut();

      unauthorize();
      reset();

      set({ key: 'ok' });
    } catch (error: unknown) {
      set({ key: 'error', response: getError(error) });
    }
  },
}));

export { useSignOutStore };
