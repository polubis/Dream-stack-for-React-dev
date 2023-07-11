import { create } from 'zustand';
import type { ArticlesCreatorStore } from './defs';

const useArticlesCreatorStore = create<ArticlesCreatorStore>((set) => ({
  key: 'idle',
  code: '',
  load: async (code) => {
    set({ key: 'loading', code });

    await new Promise(() => {
      setTimeout(() => {
        set({ key: 'loaded' });
      }, 1000);
    });
  },
  change: (code) => {
    set({ code });
  },
}));

const reset = (): void => {
  useArticlesCreatorStore.setState({ key: 'idle' });
};

export { useArticlesCreatorStore, reset };
