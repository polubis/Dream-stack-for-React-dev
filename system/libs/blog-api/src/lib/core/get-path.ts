import type { APIPath } from '../../models';
import { getUrl } from './get-url';

const getPath = (path: APIPath): string => {
  const url = getUrl();

  return url + path;
};

export { getPath };
