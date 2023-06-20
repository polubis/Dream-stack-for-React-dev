import { composeMethodUrl } from './compose-method-url';

describe('Composes method url when: ', () => {
  const API_URL = 'https://localhost:3000/api';

  it('url includes parameters and search parameters', () => {
    expect(
      composeMethodUrl(API_URL, {
        params: ['1'],
        searchParams: {
          query: 'test',
        },
      })
    ).toBe(API_URL + '/1?query=test');
    expect(composeMethodUrl(API_URL, {})).toBe(API_URL);
  });
});
