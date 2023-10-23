import {
  YourArticlesStore,
  your_articles_actions,
  your_articles_selectors,
} from '../../store/your-articles';
import { useSearchParams } from 'next/navigation';
import { useEffect, useCallback, useMemo } from 'react';
import { Lang } from '@system/blog-api-models';
import { useLang } from '../../dk';
import { isArticleStatus } from '@system/blog-api';
import { isServer } from '@system/utils';
import { useRouter } from 'next/router';
import { isEqual } from 'lodash';

const getDefaultArticlesParams = (lang: Lang): YourArticlesStore.Params => ({
  lang,
  Search: '',
  CurrentPage: 1,
  ItemsPerPage: 20,
  Status: 'Draft',
  Tags: [],
});

const getArticlesParams = (
  lang: Lang,
  defaultParams: YourArticlesStore.Params
): YourArticlesStore.Params => {
  if (isServer()) return defaultParams;

  const params = new URLSearchParams(window.location.search);
  const status = params.get('Status');
  const tags = params.get('Tags');

  return {
    Search: params.get('Search') ?? defaultParams.Search,
    CurrentPage: +(params.get('CurrentPage') ?? defaultParams.CurrentPage),
    ItemsPerPage: +(params.get('ItemsPerPage') ?? defaultParams.ItemsPerPage),
    Status: isArticleStatus(status) ? status : defaultParams.Status,
    Tags: tags ? decodeURIComponent(tags).split(',') : defaultParams.Tags,
    lang,
  };
};

const useYourArticles = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = useLang();
  const state = your_articles_selectors.useState();
  const defaultParams = useMemo(() => getDefaultArticlesParams(lang), [lang]);
  const params = useMemo(
    () => getArticlesParams(lang, defaultParams),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang, searchParams, defaultParams]
  );
  const hasNotDefaultParams = useMemo(
    () => !isEqual(defaultParams, params),
    [defaultParams, params]
  );

  const handleLoad = useCallback((params: YourArticlesStore.Params) => {
    your_articles_actions.load(params);
  }, []);

  useEffect(() => {
    const sub = your_articles_actions.init();

    return () => {
      sub.unsubscribe();
    };
  }, []);

  useEffect(() => handleLoad(params), [handleLoad, params]);

  const change = useCallback(
    (newParams: Partial<YourArticlesStore.Params>): void => {
      const query = {
        ...params,
        ...newParams,
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
    [router, params]
  );

  const changeSearch = useCallback(
    (Search: YourArticlesStore.Params['Search']) => {
      change({ Search, CurrentPage: 1 });
    },
    [change]
  );

  const changeTags = useCallback(
    (Tags: YourArticlesStore.Params['Tags']) => {
      change({ Tags, CurrentPage: 1 });
    },
    [change]
  );

  const changeStatus = useCallback(
    (Status: YourArticlesStore.Params['Status']) => {
      change({ Status, CurrentPage: 1 });
    },
    [change]
  );

  const changeToNextPage = useCallback(() => {
    const state = your_articles_selectors.state();

    if (state.allLoaded) return;

    change({ CurrentPage: params.CurrentPage + 1 });
  }, [change, params]);

  const reset = useCallback(() => {
    change(getDefaultArticlesParams(lang));
  }, [change, lang]);

  return {
    state,
    params,
    hasNotDefaultParams,
    changeSearch,
    changeTags,
    changeStatus,
    changeToNextPage,
    reset,
  };
};

export { useYourArticles };
