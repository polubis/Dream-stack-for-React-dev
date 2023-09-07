import { create } from 'zustand';
import { getError, signIn } from '@system/blog-api';
import type { SignInStore } from './defs';

const useSignInStore = create<SignInStore>((set) => ({
    key: 'idle',
    error: null,
    signIn: async (payload) => {
        set({ key: 'pending' });

        try {
            // Here is a real request!
            await signIn(payload);

            set({ key: 'ok' });
        } catch (error: unknown) {
            set({ key: 'error', error: getError(error) });
        }
    },
}));