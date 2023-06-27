import { getEnv } from '../../environment';

const getUrl = () => {
  const [key, url] = getEnv('NEXT_PUBLIC_API_URL');

  if (url === undefined) {
    throw Error(`Lack of "${key}" environment variable. Cannot create url.`);
  }

  return url;
};

export { getUrl };
