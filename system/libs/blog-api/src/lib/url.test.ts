import { apiUrlUndefinedError, url } from './url';

describe('Creates url when: ', () => {
  const initialApiUrl = process.env['NEXT_PUBLIC_API_URL'];
  const api = 'https://some-api';

  afterEach(() => {
    process.env['NEXT_PUBLIC_API_URL'] = initialApiUrl;
  });

  it('throws exception if there is no env variable', () => {
    delete process.env['NEXT_PUBLIC_API_URL'];

    expect(() => url('/Users')).toThrow(apiUrlUndefinedError);
  });

  it('returns url with passed path', () => {
    process.env['NEXT_PUBLIC_API_URL'] = api;

    expect(url('/Users')).toBe(api + '/Users');
  });
});
