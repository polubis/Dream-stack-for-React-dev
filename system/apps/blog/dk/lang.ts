import type { Lang } from '../models';

const isLang = (param: string): param is Lang => {
  return param === ('en' as Lang) || param === ('pl' as Lang);
};

const getLang = (pathname: string): Lang => {
  const lang = pathname.split('/')[1];

  return isLang(lang) ? lang : 'en';
};

export { isLang, getLang };
