import type { Params, Url } from './defs';

const attachParams = (url: Url, params: Params = []): Url => {
  const paramsStr = params.join('/');
  return `${url}${paramsStr === '' ? '' : '/' + paramsStr}`;
};

export { attachParams };
