import { useRouter } from 'next/router';
import { Lang } from '../models';
import { useMemo } from 'react';

const isLang = (param: string): param is Lang => {
  return param === ('en' as Lang) || param === ('pl' as Lang);
};

const getLang = (pathname: string): Lang => {
  const lang = pathname.split('/')[1];

  return isLang(lang) ? lang : 'en';
};

const useLang = () => {
  const router = useRouter();

  return useMemo(() => getLang(router.pathname), [router]);
};

export { useLang };
