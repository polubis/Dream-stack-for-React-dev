import type { Lang } from '@system/blog-api-models';
import { useLang } from '../../dk';
import {
  LiveArticlesStore,
  live_articles_selectors,
} from '../../store/live-articles';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { isArticleStatus } from '@system/blog-api';
import { isServer } from '@system/utils';

const getArticlesParams = (lang: Lang): LiveArticlesStore.Params => {
  const { initialParams } = live_articles_selectors.safeState();

  if (isServer()) return initialParams;

  const params = new URLSearchParams(window.location.search);
  const status = params.get('Status');
  const tags = params.get('Tags');

  return {
    Search: params.get('Search') ?? initialParams.Search,
    CurrentPage: +(params.get('CurrentPage') ?? initialParams.CurrentPage),
    ItemsPerPage: +(params.get('ItemsPerPage') ?? initialParams.ItemsPerPage),
    Status: isArticleStatus(status) ? status : initialParams.Status,
    Tags: tags ? decodeURIComponent(tags).split(',') : initialParams.Tags,
    lang,
  };
};

const useLiveArticlesRouter = () => {
  const router = useRouter();
  const lang = useLang();

  const go = useCallback(
    (
      setter: (
        params: LiveArticlesStore.Params
      ) => Partial<LiveArticlesStore.Params>
    ): void => {
      const params = getArticlesParams(lang);
      const query = {
        ...params,
        ...setter(params),
      };

      router.replace(
        router.asPath,
        {
          query: {
            ...query,
            Tags: encodeURIComponent(query.Tags.toString()),
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

export { useLiveArticlesRouter };
