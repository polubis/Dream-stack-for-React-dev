import { create } from 'zustand';
import type { YourArticlesStore } from './defs';

const useYourArticlesStore = create<YourArticlesStore.State>(() => ({
  is: 'idle',
}));

export { useYourArticlesStore };
