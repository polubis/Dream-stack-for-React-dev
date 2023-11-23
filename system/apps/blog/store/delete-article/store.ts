import { create } from 'zustand';
import { type DeleteArticleStore } from './defs';

const useDeleteArticleStore = create<DeleteArticleStore.State>(() => ({
  is: 'idle',
}));

export { useDeleteArticleStore };
