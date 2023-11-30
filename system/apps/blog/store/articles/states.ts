import type { ArticlesStore } from './defs';

const articles_store_states: ArticlesStore.States = {
  filters: (filters = {}) => ({
    lang: 'en',
    page: 1,
    query: '',
    limit: 12,
    status: 'WaitingForApproval',
    yours: false,
    ...filters,
  }),
  idle: () => ({ is: 'idle', filters: articles_store_states.filters() }),
  busy: () => ({ is: 'busy', filters: articles_store_states.filters() }),
  ok: (articles, filters = {}) => ({
    is: 'ok',
    filters: articles_store_states.filters(filters),
    articles,
  }),
};

export { articles_store_states };
