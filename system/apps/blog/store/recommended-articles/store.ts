import { create } from 'zustand';
import type { RecommendedArticlesStore } from './defs';

const useRecommendedArticlesStore = create<RecommendedArticlesStore.State>(
  () => ({
    is: 'idle',
  })
);

export { useRecommendedArticlesStore };
