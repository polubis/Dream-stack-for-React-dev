import type { ArticleStatus, Lang } from '@system/blog-api-models';
import { useLang } from '../../dk';
import {
  LiveArticlesStore,
  live_articles_selectors,
} from '../../store/live-articles';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const isArticleStatus = (status: string): status is ArticleStatus => {
  return (
    ['Accepted', 'WaitingForApproval', 'Draft', 'NeedWork'] as ArticleStatus[]
  ).includes(status as ArticleStatus);
};

const getArticlesParams = (lang: Lang): LiveArticlesStore.Params => {
  const { initialParams } = live_articles_selectors.safeState();

  const params = new URLSearchParams(window.location.search);

  const status = params.get('Status');

  return {
    Search: params.get('Search') ?? initialParams.Search,
    CurrentPage: +(params.get('CurrentPage') ?? initialParams.CurrentPage),
    ItemsPerPage: +(params.get('ItemsPerPage') ?? initialParams.ItemsPerPage),
    Status: isArticleStatus(status) ? status : initialParams.Status,
    lang,
  };
};

export const useArticlesFilters = () => {
  const router = useRouter();
  const lang = useLang();

  const go = useCallback(
    (
      setter: (
        params: LiveArticlesStore.Params
      ) => Partial<LiveArticlesStore.Params>
    ): void => {
      const params = getArticlesParams(lang);
      router.replace(
        router.asPath,
        {
          query: {
            ...params,
            ...setter(params),
          },
        },
        { shallow: true, scroll: false }
      );
    },
    [router, lang]
  );

  const getParams = useCallback(() => getArticlesParams(lang), [lang]);

  return {
    go,
    getParams,
  };
};
