import { ArticlesStore } from './defs';
// Util function to parse error message to string from
// "unknown" response.
import { parseError } from '@services';

export const articles_store_states: ArticlesStore.States = {
  idle: () => ({ is: 'idle' }),
  busy: () => ({ is: 'busy' }),
  ok: (articles) => ({ is: 'ok', articles }),
  fail: (error: unknown) => ({ is: 'fail', error: parseError(error) }),
};
