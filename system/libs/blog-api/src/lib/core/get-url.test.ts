import { getUrl } from './get-url';

const API_URL = 'https://localhost:3000';

describe('Reads API url when: ', () => {
  it('throws exception if lack of env variable', () => {
    const variable = process.env['NEXT_PUBLIC_API_URL'];

    delete process.env['NEXT_PUBLIC_API_URL'];

    expect(() => getUrl()).toThrow();

    process.env['NEXT_PUBLIC_API_URL'] = variable;
  });

  it('returns readed url', () => {
    const variable = process.env['NEXT_PUBLIC_API_URL'];

    process.env['NEXT_PUBLIC_API_URL'] = API_URL;

    expect(getUrl()).toBe(API_URL);

    process.env['NEXT_PUBLIC_API_URL'] = variable;
  });
});
