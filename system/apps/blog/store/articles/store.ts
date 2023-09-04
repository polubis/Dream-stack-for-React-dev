import { create } from 'zustand';
import type * as Articles from './defs';

const createArticlesInitialState = (): Articles.State => ({
  is: 'idle',
  filters: {
    lang: 'en',
    page: 1,
    query: '',
    limit: 12,
    status: 'WaitingForApproval',
  },
});

const useArticlesStore = create<Articles.State>(createArticlesInitialState);

export { useArticlesStore, createArticlesInitialState };
