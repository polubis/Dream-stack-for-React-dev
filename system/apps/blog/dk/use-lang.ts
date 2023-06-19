import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getLang } from './lang';

const useLang = () => {
  const router = useRouter();

  return useMemo(() => getLang(router.pathname), [router]);
};

export { useLang };
