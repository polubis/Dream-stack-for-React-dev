import { create } from 'zustand';
import type { LiveArticlesStore } from './defs';

const useLiveArticlesStore = create<LiveArticlesStore.State>(() => ({
  is: 'idle',
}));

export { useLiveArticlesStore };
