import { attachParams } from './attach-params';
import { attachSearchParams } from './attach-search-params';
import type { MethodConfigWithoutBody, Url } from './defs';

const composeMethodUrl = (
  url: Url,
  methodConfig: MethodConfigWithoutBody
): Url => {
  return attachSearchParams(
    attachParams(url, methodConfig.params),
    methodConfig.searchParams
  );
};

export { composeMethodUrl };
