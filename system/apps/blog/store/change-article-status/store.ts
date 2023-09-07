import { create } from 'zustand';
import type * as ChangeArticleStatus from './defs';

const useChangeArticleStatusStore = create<ChangeArticleStatus.State>(() => ({
  is: 'idle',
}));

export { useChangeArticleStatusStore };
