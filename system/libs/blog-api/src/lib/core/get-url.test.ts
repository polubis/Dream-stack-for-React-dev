import { blogEnvFixture } from '../test-utils';
import { getUrl } from './get-url';

describe('Reads API url when: ', () => {
  it('returns readed url', () => {
    expect(getUrl()).toBe(blogEnvFixture.get('NEXT_PUBLIC_API_URL'));
  });
});
