import { SOURCE_DEFAULTS } from './consts';
import type { HttpConfig, HttpSearchParams, SourceConfig } from './defs';
import { getLackOfUrlError, isUrl } from './utils';
import { http } from './http';

const source = (sourceConfig: SourceConfig = {}) => {
  function useHttp<
    R,
    B = unknown,
    P extends HttpSearchParams = HttpSearchParams
  >(httpConfig: HttpConfig = {}) {
    const { url: httpUrl, ...httpDefaults } = httpConfig;
    const { url: sourceUrl, ...defaults } = sourceConfig;

    if (!isUrl(sourceUrl) || !isUrl(httpUrl)) {
      throw Error(getLackOfUrlError());
    }

    return http<R, B, P>({
      ...SOURCE_DEFAULTS,
      ...defaults,
      ...httpDefaults,
      url: sourceUrl + httpUrl,
    });
  }

  return {
    http: useHttp,
  };
};

export { source };
