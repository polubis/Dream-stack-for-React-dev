import { env } from './env';

import { envFixture } from './test-utils';

describe('Environment util can be used when: ', () => {
  const API_URL = 'https://localhost:3000/api';
  const ACCESS_TOKEN = 'https://localhost:3000/api';

  const fixture = envFixture({ API_URL, ACCESS_TOKEN });

  beforeAll(() => {
    fixture.setup();
  });

  afterEach(() => {
    fixture.restoreAll();
  });

  it('allows to get environment variable', () => {
    const myEnv = env({
      ACCESS_TOKEN: () => process.env['ACCESS_TOKEN'],
      API_URL: () => process.env['API_URL'],
    });

    myEnv.get('API_URL');
    myEnv.get('ACCESS_TOKEN');

    expect(myEnv.get('API_URL')).toBe(API_URL);
    expect(myEnv.get('ACCESS_TOKEN')).toBe(ACCESS_TOKEN);
  });

  it('allows to get all environment variables', () => {
    const myEnv = env({
      ACCESS_TOKEN: () => process.env['ACCESS_TOKEN'],
      API_URL: () => process.env['API_URL'],
    });

    expect(myEnv.getAll()).toEqual({
      API_URL,
      ACCESS_TOKEN,
    });
  });

  it('throws an error if at least one variable is undefined', () => {
    fixture.delete('API_URL');

    expect(() =>
      env({
        ACCESS_TOKEN: () => process.env['ACCESS_TOKEN'],
        API_URL: () => process.env['API_URL'],
      })
    ).toThrow();
  });
});
