import { envFixture } from '../test-utils';
import { getUrl } from './get-url';

describe('Reads API url when: ', () => {
  const API_URL = 'https://localhost:3000';
  const fixture = envFixture('NEXT_PUBLIC_API_URL', API_URL);

  afterEach(() => {
    fixture.restore();
  });

  it('throws exception if lack of env variable', () => {
    fixture.delete();
    expect(() => getUrl()).toThrow();
  });

  it('returns readed url', () => {
    fixture.set(API_URL);
    expect(getUrl()).toBe(API_URL);
  });
});
