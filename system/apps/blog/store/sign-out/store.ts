import { create } from 'zustand';
import type { SignOutStore } from './defs';

const useSignOutStore = create<SignOutStore.State>(() => ({
  is: 'idle',
}));

export { useSignOutStore };
