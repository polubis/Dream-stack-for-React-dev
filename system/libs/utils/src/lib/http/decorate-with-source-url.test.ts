import { decorateWithSourceUrl } from './decorate-with-source-url';
import type { FactoryConfig } from './defs';

describe('Decorates factory url with source url: ', () => {
  const API_URL = 'https://localhost:3000/api';

  it('factory is enhanced with combined url', () => {
    expect(
      decorateWithSourceUrl(
        { url: API_URL },
        {
          url: '/users',
        }
      )
    ).toEqual({
      url: API_URL + '/users',
    } as FactoryConfig);
  });
});
