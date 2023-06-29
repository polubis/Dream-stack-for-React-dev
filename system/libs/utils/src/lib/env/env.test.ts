import { env } from './env';

import { envFixture } from './test-utils';

describe('Environment util can be used when: ', () => {
  const API_URL = 'https://localhost:3000/api';
  const ACCESS_TOKEN = 'https://localhost:3000/api';

  interface MyVars {
    API_URL: string;
    ACCESS_TOKEN: string;
  }

  const fixture = envFixture<MyVars>({ API_URL, ACCESS_TOKEN });

  beforeAll(() => {
    fixture.setup();
  });

  afterEach(() => {
    fixture.restoreAll();
  });

  it('allows to get environment variable', () => {
    const myEnv = env<MyVars>('ACCESS_TOKEN', 'API_URL');

    myEnv.get('API_URL');
    myEnv.get('ACCESS_TOKEN');

    expect(myEnv.get('API_URL')).toBe(API_URL);
    expect(myEnv.get('ACCESS_TOKEN')).toBe(ACCESS_TOKEN);
  });

  it('throws an error if at least one variable is undefined', () => {
    fixture.delete('API_URL');

    expect(() => env<MyVars>('ACCESS_TOKEN', 'API_URL')).toThrow();
  });
});
