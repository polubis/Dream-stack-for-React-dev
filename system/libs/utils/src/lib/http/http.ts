import type { HttpConfig, HttpSearchParams } from './defs';
import { getLackOfUrlError, isUrl } from './utils';

const http = <R, B = unknown, P extends HttpSearchParams = HttpSearchParams>(
  config: HttpConfig = {}
) => {
  const { url, method, headers, ...rest } = config;

  if (!isUrl(url)) {
    throw Error(getLackOfUrlError());
  }

  return async (body: B, searchParams?: P) => {
    const bodyAsString =
      method !== 'get' && method !== 'delete'
        ? JSON.stringify(body)
        : undefined;

    const urlWithSearchParams =
      searchParams === undefined
        ? url
        : url + '?' + new URLSearchParams(searchParams);

    const response = await fetch(urlWithSearchParams, {
      ...rest,
      method,
      headers,
      body: bodyAsString,
    });

    const json = (await response.json()) as R;

    if (!response.ok) {
      throw json;
    }

    return json;
  };
};

export { http };
