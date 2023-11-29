import { create } from 'zustand';
import type * as Articles from './defs';
import { articles_store_states } from './states';

const useArticlesStore = create<Articles.State>(() => articles_store_states.idle());

export { useArticlesStore };
