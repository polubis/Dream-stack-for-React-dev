import { getStatus } from '../core';
import { blogAPI } from '../instances';
import type { Intercept, Interceptable } from './defs';

const interceptUnauthorized: Intercept = (cb: () => void) => {
  let id: number;

  const listen: Interceptable['listen'] = () => {
    id = blogAPI.interceptors.response.use(
      (response) => response,
      (error: unknown) => {
        getStatus(error) === 401 && cb();

        return Promise.reject(error);
      }
    );
  };

  const clean: Interceptable['clean'] = (): void => {
    blogAPI.interceptors.response.eject(id);
  };

  return {
    listen,
    clean,
  };
};

export { interceptUnauthorized };
