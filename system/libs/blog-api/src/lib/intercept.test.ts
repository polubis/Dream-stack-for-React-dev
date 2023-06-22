import { interceptUnauthorized } from './intercept';

import { mockErrorResponse, requestFixture } from './test-utils';
import { blogAPI } from './instances';
import { getPath } from './core';

const { adapter, clean, server } = requestFixture();

adapter.onPost(getPath('Account/SignOut')).reply(401, mockErrorResponse());

describe('Unauthorized interceptor works when: ', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    clean();
  });

  afterAll(() => {
    server.close();
  });

  it('detects 401 status, calls callback, allows to listen and clean', async () => {
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
