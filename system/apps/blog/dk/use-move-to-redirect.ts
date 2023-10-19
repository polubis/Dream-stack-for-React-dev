import { useRouter } from 'next/router';
import { getLang } from './lang';

const useMoveToRedirect = () => {
  const router = useRouter();

  const redirect = (): void => {
    const lang = getLang(router.pathname);
    const moveToPath = new URLSearchParams(window.location.search).get(
      'moveTo'
    );

    if (!moveToPath) {
      router.push(`/${lang}/your-articles`);
      return;
    }

    const params = new URLSearchParams(window.location.search).toString();

    router.push(
      params ? `/${lang}${moveToPath}?${params}` : `/${lang}${moveToPath}`
    );
  };

  const go = (path: string, moveToPath: string): void => {
    const lang = getLang(router.pathname);
    const params = new URLSearchParams(window.location.search).toString();
    const url = `/${lang}${path}?moveTo=${moveToPath}`;

    router.push(params ? `${url}&${params}` : url);
  };

  return {
    redirect,
    go,
  };
};

export { useMoveToRedirect };
