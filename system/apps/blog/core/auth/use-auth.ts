import { unauthorize, useAuthStore } from '../../store/auth';
import { interceptUnauthorized } from '@system/blog-api';
import { useEffect } from 'react';

const useAuth = () => {
  const authStore = useAuthStore();

  useEffect(() => {
    const { listen, clean } = interceptUnauthorized(unauthorize);

    listen();

    authStore.check();

    return () => {
      clean();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export { useAuth };
