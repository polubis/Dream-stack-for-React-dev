import { create } from 'zustand';
import type { AuthStoreState } from './defs';
import { signIn, signOut } from '@system/blog-api';
import type { SignInPayload } from '@system/blog-api-models';
import { AccountModel } from '@system/blog-models';
import { storage } from '@system/utils';

const accountStorage = storage<AccountModel>()('account');

const useAuthStore = create<AuthStoreState>((set) => ({
  key: 'idle',
  check: async () => {
    set({ key: 'checking' });

    if (accountStorage.get()) {
      set({ key: 'signed-in' });
    } else {
      set({ key: 'not-signed-in' });
    }
  },
  signIn: async (payload: SignInPayload) => {
    try {
      set({ key: 'signing-in' });

      const account = await signIn(payload);

      accountStorage.set(account);

      set({ key: 'signed-in', account });
    } catch (err) {
      set({ key: 'sign-in-error' });
    }
  },
  signOut: async () => {
    try {
      set({ key: 'signing-out' });

      await signOut();

      accountStorage.remove();

      set({ key: 'signed-out' });
    } catch (err) {
      set({ key: 'sign-out-error' });
    }
  },
}));

export { useAuthStore };
