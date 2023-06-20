import { createMethodWithBody } from './create-method-with-body';
import { decorateFetch } from './decorate-fetch';

jest.mock('./decorate-fetch');

describe('Creates method with body when: ', () => {
  const API_URL = 'https://localhost:3000/api';

  it('throws exception if no url', () => {
    expect(() =>
      createMethodWithBody('post')<{ id: number }, undefined>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        url: undefined as any,
      })
    ).toThrow();
  });

  it('is integrated with decorate fetch feature', async () => {
    (decorateFetch as jest.Mock).mockResolvedValue(null);

    const post = createMethodWithBody('post')<null, null>({
      url: API_URL,
    });

    await post({ body: null });

    expect(decorateFetch).toHaveBeenCalledTimes(1);
  });
});
