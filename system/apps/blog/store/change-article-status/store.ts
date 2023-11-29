import { create } from 'zustand';
import type { ChangeArticleStatusStore } from './defs';

const useChangeArticleStatusStore = create<ChangeArticleStatusStore.State>(
  () => ({
    is: 'idle',
  })
);

export { useChangeArticleStatusStore };
