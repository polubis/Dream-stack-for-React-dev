import { useSubject } from '@system/figa-hooks';
import { YourArticlesStore } from '../../store/your-articles';
import { useSearchParams } from 'next/navigation';
import { useEffect, useCallback } from 'react';
import { Lang } from '@system/blog-api-models';
import { useLang } from '../../dk';
import { isArticleStatus } from '@system/blog-api';

const getArticlesParams = (lang: Lang): YourArticlesStore.Params => {
  const params = new URLSearchParams(window.location.search);
  const status = params.get('Status');
  const tags = params.get('Tags');
  console.log(params.get('CurrentPage'));
  return {
    Search: params.get('Search') ?? '',
    CurrentPage: +(params.get('CurrentPage') ?? 1),
    ItemsPerPage: +(params.get('ItemsPerPage') ?? 20),
    Status: isArticleStatus(status) ? status : 'Draft',
    Tags: tags ? decodeURIComponent(tags).split(',') : [],
    lang,
  };
};

const useYourArticlesParams = () => {
  const searchParams = useSearchParams();
  const lang = useLang();

  const handleLoad = useCallback(() => {
    console.log('here perform a call');
  }, []);

  const { emit } = useSubject<YourArticlesStore.Params>({
    delay: 500,
    cb: handleLoad,
  });

  useEffect(() => {
    console.log(getArticlesParams(lang));
    emit(getArticlesParams(lang));
  }, [searchParams, emit, lang]);
};

export { useYourArticlesParams };
