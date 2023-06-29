import { getStatus } from '../core';
import { blogAPI } from '../instances';
import type { Intercept, Interceptable } from './defs';

const interceptUnauthorized: Intercept = (cb: () => void) => {
  let id: number | undefined;

  const clean: Interceptable['clean'] = (): void => {
    id !== undefined && blogAPI.interceptors.response.eject(id);
  };

  const listen: Interceptable['listen'] = () => {
    id = blogAPI.interceptors.response.use(
      (response) => response,
      (error: unknown) => {
        getStatus(error) === 401 && cb();

        return Promise.reject(error);
      }
    );
  };

  return {
    listen,
    clean,
  };
};

export { interceptUnauthorized };
