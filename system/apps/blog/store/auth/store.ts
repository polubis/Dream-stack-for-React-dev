import { create } from 'zustand';
import type { AuthStore } from './defs';

const useAuthStore = create<AuthStore.State>((set) => ({
  is: 'idle',
  user: null,
}));

export { useAuthStore };
