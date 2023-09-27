import type * as Articles from './defs';

const articles_states: Articles.States = {
  filters: (filters = {}) => ({
    lang: 'en',
    page: 1,
    query: '',
    limit: 12,
    status: 'WaitingForApproval',
    yours: false,
    ...filters,
  }),
  idle: () => ({ is: 'idle', filters: articles_states.filters() }),
  ok: (articles, filters = {}) => ({
    is: 'ok',
    filters: articles_states.filters(filters),
    articles,
  }),
};

export { articles_states };
