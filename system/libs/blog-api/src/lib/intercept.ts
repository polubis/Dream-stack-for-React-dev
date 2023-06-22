import { blogAPI } from './instances';
import { getStatus } from './core';

const interceptUnauthorized = (cb: () => void) => {
  let id: number;

  const listen = (): void => {
    id = blogAPI.interceptors.response.use(
      (response) => response,
      (error: unknown) => {
        getStatus(error) === 401 && cb();

        return Promise.reject(error);
      }
    );
  };

  const clean = (): void => {
    blogAPI.interceptors.response.eject(id);
  };

  return {
    listen,
    clean,
  };
};

export { interceptUnauthorized };
