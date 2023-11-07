import { useContext, createContext } from 'react';

import { isArticleStatus } from '@system/blog-api';
import { Lang } from '@system/blog-api-models';
import { useLang } from '../../dk';
import { ArticlesStore } from '../../store/articles';
import { articles_selectors } from '../../store/articles/articles.selectors';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { isEqual } from 'lodash';
import { ArticlesFiltersProviderProps } from './defs';

const getFilters = (lang: Lang, isReady: boolean): ArticlesStore.Filters => {
  const { defaultFilters } = articles_selectors.state();

  if (!isReady) {
    return defaultFilters;
  }

  const params = new URLSearchParams(window.location.search);
  const status = params.get('Status');
  const tags = params.get('Tags');
  const yours = params.get('Yours');

  return {
    Search: params.get('Search') ?? defaultFilters.Search,
    CurrentPage: +(params.get('CurrentPage') ?? defaultFilters.CurrentPage),
    ItemsPerPage: +(params.get('ItemsPerPage') ?? defaultFilters.ItemsPerPage),
    Status: isArticleStatus(status) ? status : defaultFilters.Status,
    Tags: tags ? decodeURIComponent(tags).split(',') : defaultFilters.Tags,
    lang,
    yours:
      yours === 'true'
        ? true
        : yours === 'false'
        ? false
        : defaultFilters.yours,
  };
};

const useArticlesFilters = () => {
  const router = useRouter();
  const lang = useLang();
  const articlesStore = articles_selectors.useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filters = useMemo(
    () => getFilters(lang, router.isReady),
    [lang, router]
  );

  const change = useCallback(
    (newFilters: Partial<ArticlesStore.Filters>): void => {
      const query = {
        ...filters,
        ...newFilters,
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
    [router, filters]
  );

  const reset = useCallback(() => {
    router.replace(
      router.asPath,
      {
        query: {
          ...articles_selectors.state().defaultFilters,
        },
      },
      { shallow: true, scroll: false }
    );
  }, [router]);

  const changed = useMemo(
    () => !isEqual(articlesStore.defaultFilters, filters),
    [articlesStore, filters]
  );

  return {
    filters,
    changed,
    change,
    reset,
  };
};

const Ctx = createContext<ReturnType<typeof useArticlesFilters> | null>(null);

const ArticlesFiltersProvider = ({
  children,
}: ArticlesFiltersProviderProps) => {
  const value = useArticlesFilters();

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

const useArticlesFiltersProvider = () => {
  const ctx = useContext(Ctx);

  if (!ctx) throw Error('Lack of provider');

  return ctx;
};

export { ArticlesFiltersProvider, useArticlesFiltersProvider };
