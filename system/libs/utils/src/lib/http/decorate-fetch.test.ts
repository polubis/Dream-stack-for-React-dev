import { decorateFetch } from './decorate-fetch';
import type { FetchConfig, FetchResponse } from './defs';

describe('Fetch decoration works when: ', () => {
  interface CustomResponse {
    id: number;
  }
  const CUSTOM_RESPONSE: CustomResponse = {
    id: 1,
  };

  const API_URL = 'https://localhost:3000/api';

  const fetch = global.fetch;

  afterEach(() => {
    global.fetch = fetch;
  });

  const decorateFetchFixture = <T>(
    data: T,
    fetchResponse: Partial<FetchResponse> = {}
  ) => {
    const jsonSpy = jest.fn().mockImplementation(() => Promise.resolve(data));
    const fetchSpy = jest.fn().mockImplementation(
      () =>
        ({
          json: jsonSpy,
          ok: true,
          ...fetchResponse,
        } as Partial<FetchResponse>)
    );
    global.fetch = fetchSpy;

    return { jsonSpy, fetchSpy };
  };

  it('throws parsed error', async () => {
    const { fetchSpy } = decorateFetchFixture(undefined, {
      ok: false,
    });
    fetchSpy.mockImplementation(() =>
      Promise.reject({
        errors: ['Error'],
      })
    );

    try {
      await decorateFetch('get', {
        url: API_URL,
      });
    } catch (err) {
      expect(err).toEqual({
        errors: ['Error'],
      });
    }
  });

  it('returns parsed response', async () => {
    const { fetchSpy, jsonSpy } = decorateFetchFixture(CUSTOM_RESPONSE);

    const response = await decorateFetch<CustomResponse>('get', {
      url: API_URL,
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(jsonSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(API_URL, {
      method: 'get',
    } as FetchConfig);
    expect(response).toEqual(CUSTOM_RESPONSE);
  });

  it('sends body as string', async () => {
    const { fetchSpy } = decorateFetchFixture(CUSTOM_RESPONSE);

    await decorateFetch<CustomResponse, { id: number }>(
      'post',
      {
        url: API_URL,
      },
      { body: { id: 1 } }
    );

    expect(fetchSpy).toHaveBeenCalledWith(API_URL, {
      method: 'post',
      body: '{"id":1}',
    } as FetchConfig);
  });

  it('creates configurations and overwrites previous settings', async () => {
    const { fetchSpy } = decorateFetchFixture(CUSTOM_RESPONSE);

    await decorateFetch<CustomResponse>(
      'get',
      {
        url: API_URL,
        headers: {
          A: '1',
        },
        referrer: API_URL,
      },
      {
        headers: {
          A: '2',
          B: '1',
        },
        referrerPolicy: 'no-referrer',
      }
    );

    expect(fetchSpy).toHaveBeenCalledWith(API_URL, {
      method: 'get',
      headers: {
        A: '2',
        B: '1',
      },
      referrer: API_URL,
      referrerPolicy: 'no-referrer',
    } as FetchConfig);
  });
});
