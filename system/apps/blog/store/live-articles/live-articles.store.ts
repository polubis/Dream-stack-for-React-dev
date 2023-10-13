import { create } from 'zustand';
import { LiveArticlesStore } from './defs';

const useLiveArticlesStore = create<LiveArticlesStore.State>(() => ({
  is: 'busy',
}));

export { useLiveArticlesStore };
