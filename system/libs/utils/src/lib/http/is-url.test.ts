import { isUrl } from './is-url';

describe('Checks the url when: ', () => {
  const API_URL = 'https://localhost:3000/api';

  it('returns true if url is not undefined', () => {
    expect(isUrl(API_URL)).toBeTruthy();
    expect(isUrl()).toBeFalsy();
  });

  it('returns false when url is undefined', () => {
    expect(isUrl()).toBeFalsy();
  });
});
