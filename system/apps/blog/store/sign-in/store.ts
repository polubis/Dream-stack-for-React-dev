import { create } from 'zustand';
import type { SignInStore } from './defs';

const useSignInStore = create<SignInStore.State>(() => ({
  is: 'idle',
  error: null,
}));

export { useSignInStore };
