import { create } from 'zustand';
import type { ArticlesCreatorStore } from './defs';

const useArticlesCreatorStore = create<ArticlesCreatorStore>((set) => ({
  key: 'idle',
  code: '',
  load: (code) => {
    set({ key: 'loaded', code });
  },
  change: (code) => {
    set({ code });
  },
}));

export { useArticlesCreatorStore };
