import { createMethodWithoutBody } from './create-method-without-body';
import { decorateFetch } from './decorate-fetch';

jest.mock('./decorate-fetch');

describe('Creates method without body when: ', () => {
  const API_URL = 'https://localhost:3000/api';

  it('throws exception if no url', () => {
    expect(() =>
      createMethodWithoutBody('get')<{ id: number }>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        url: undefined as any,
      })
    ).toThrow();
  });

  it('is integrated with decorate fetch feature', async () => {
    (decorateFetch as jest.Mock).mockResolvedValue(null);

    const get = createMethodWithoutBody('get')<null>({
      url: API_URL,
    });

    await get();

    expect(decorateFetch).toHaveBeenCalledTimes(1);
  });
});
