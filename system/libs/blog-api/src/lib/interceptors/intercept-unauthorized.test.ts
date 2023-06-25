import { getPath } from '../core';
import { blogAPI } from '../instances';
import { mockErrorResponse, requestFixture } from '../test-utils';
import { interceptUnauthorized } from './intercept-unauthorized';

describe('Unauthorized interceptor works when: ', () => {
  const { adapter, clean, server } = requestFixture();

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    clean();
  });

  afterAll(() => {
    server.close();
  });

  it('detects 401 status, calls callback, allows to listen and cleans', async () => {
    adapter.onPost(getPath('Account/SignOut')).reply(401, mockErrorResponse());

    const useSpy = jest.fn();

    const { clean, listen } = interceptUnauthorized(useSpy);

    listen();

    try {
      await blogAPI.post(getPath('Account/SignOut'));
    } catch {
      expect(useSpy).toHaveBeenCalledTimes(1);
    }

    clean();

    try {
      await blogAPI.post(getPath('Account/SignOut'));
    } catch {
      expect(useSpy).toHaveBeenCalledTimes(0);
    }
  });
});
