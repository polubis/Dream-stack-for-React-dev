import type { Request } from './defs';
import { source } from './source';

describe('Creates working source when: ', () => {
  const API_URL = 'https://localhost:3000/api';

  it('interceptor allows to listen to requests', async () => {
    const { get, intercept } = source({
      url: API_URL,
    });

    const requests: Request[] = [];

    const sub = intercept().subscribe((request) => {
      requests.push(request);
    });

    await get({ url: 'users' });

    expect(requests.length).toBe(3);

    sub.unsubscribe();
  });
});
