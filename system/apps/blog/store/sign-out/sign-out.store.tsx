import { create } from 'zustand';
import type { SignOutStore } from './defs';
import { getError, signOut } from '@system/blog-api';
import { unauthorize } from '../auth';

const useSignOutStore = create<SignOutStore>((set) => ({
  key: 'idle',
  signOut: async () => {
    set({ key: 'pending' });

    try {
      await signOut();

      unauthorize();

      set({ key: 'ok' });
    } catch (error: unknown) {
      set({ key: 'error', response: getError(error) });
    }
  },
}));

export { useSignOutStore };
