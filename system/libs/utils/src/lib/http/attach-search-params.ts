import type { SearchParams, Url } from './defs';

const attachSearchParams = (url: Url, searchParams?: SearchParams): Url => {
  if (!searchParams || Object.keys(searchParams).length === 0) {
    return url;
  }

  return url + '?' + new URLSearchParams(searchParams);
};

export { attachSearchParams };
