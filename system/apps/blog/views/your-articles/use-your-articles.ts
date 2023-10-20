import { useSubject } from '@system/figa-hooks';
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
import { isEqual } from 'lodash';
import { isServer } from '@system/utils';
import { useRouter } from 'next/router';

const getArticlesParams = (lang: Lang): YourArticlesStore.Params => {
  const defaults: YourArticlesStore.Params = {
    lang,
    Search: '',
    CurrentPage: 1,
    ItemsPerPage: 20,
    Status: 'Draft',
    Tags: [],
  };

  if (isServer()) return defaults;

  const params = new URLSearchParams(window.location.search);
  const status = params.get('Status');
  const tags = params.get('Tags');

  return {
    Search: params.get('Search') ?? defaults.Search,
    CurrentPage: +(params.get('CurrentPage') ?? defaults.CurrentPage),
    ItemsPerPage: +(params.get('ItemsPerPage') ?? defaults.ItemsPerPage),
    Status: isArticleStatus(status) ? status : defaults.Status,
    Tags: tags ? decodeURIComponent(tags).split(',') : defaults.Tags,
    lang,
  };
};

const useYourArticles = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = useLang();
  const state = your_articles_selectors.useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params = useMemo(() => getArticlesParams(lang), [lang, searchParams]);
  const equal = useMemo(() => isEqual(state.params, params), [state, params]);

  const handleLoad = useCallback(
    (params: YourArticlesStore.Params) => {
      if (equal) return;

      your_articles_actions.load(params);
    },
    [equal]
  );

  const { emit } = useSubject<YourArticlesStore.Params>({
    delay: 500,
    cb: handleLoad,
  });

  useEffect(() => emit(params), [params, emit]);

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

  return { state, params, equal, change };
};

export { useYourArticles };
