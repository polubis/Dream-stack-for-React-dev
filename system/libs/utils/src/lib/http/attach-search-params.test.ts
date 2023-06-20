import { attachSearchParams } from './attach-search-params';

describe('Allows to attach search url parameters when: ', () => {
  const API_URL = 'https://localhost:3000/api';

  it('the base url is merged with search params', () => {
    expect(
      attachSearchParams(API_URL, {
        query: 'test',
        page: '1',
      })
    ).toBe(API_URL + '?query=test&page=1');
    expect(
      attachSearchParams(API_URL, {
        query: 'test',
      })
    ).toBe(API_URL + '?query=test');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(attachSearchParams(API_URL, null as any)).toBe(API_URL);
    expect(attachSearchParams(API_URL, {})).toBe(API_URL);
  });
});
