import { getPath } from '../core';
import { blogAPI } from '../instances';
import { mockErrorResponse, requestFixture } from '../test-utils';
import { interceptUnauthorized } from './intercept-unauthorized';

describe('Unauthorized interceptor works when: ', () => {
  const { clean, server, rest } = requestFixture();

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
    server.use(
      rest.post(getPath('Account/SignOut'), (_, res, ctx) => {
        return res(ctx.status(401), ctx.json(mockErrorResponse()));
      })
    );
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
      expect(useSpy).toHaveBeenCalledTimes(1);
    }
  });
});
