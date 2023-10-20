import { create } from 'zustand';
import { YourArticlesStore } from './defs';

const useYourArticlesStore = create<YourArticlesStore.State>(() => ({
  is: 'idle',
}));

export { useYourArticlesStore };
