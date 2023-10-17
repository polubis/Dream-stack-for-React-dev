import {unauthorize, useAuthStore} from '../../store/auth';
import {interceptUnauthorized} from '@system/blog-api';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useLang} from '../../dk';

const useAuth = () => {
  const authStore = useAuthStore();
  const router = useRouter();
  const lang = useLang();

  useEffect(() => {
    const {listen, clean} = interceptUnauthorized(() => {
      unauthorize();
      router.push(`/${lang}/articles`);
    });
    listen();
    authStore.check();

    router.push(`/${lang}/articles`);
    
    return () => {
      clean();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authStore.key]);
};

export {useAuth};
