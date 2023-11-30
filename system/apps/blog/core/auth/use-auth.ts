import { auth_store_actions } from '../../store/auth';
import { interceptUnauthorized } from '@system/blog-api';
import { useEffect } from 'react';

const useAuth = () => {
  useEffect(() => {
    const { listen, clean } = interceptUnauthorized(
      auth_store_actions.unauthorize
    );

    listen();

    auth_store_actions.check();

    return () => {
      clean();
    };
  }, []);
};

export { useAuth };
