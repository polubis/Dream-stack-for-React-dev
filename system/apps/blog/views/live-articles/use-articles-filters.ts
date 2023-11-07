import { isArticleStatus } from '@system/blog-api';
import { Lang } from '@system/blog-api-models';
import { useLang } from 'apps/blog/dk';
import { ArticlesStore } from 'apps/blog/store/articles';
import { articles_selectors } from 'apps/blog/store/articles/articles.selectors';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

const getFilters = (lang: Lang, isReady: boolean): ArticlesStore.Filters => {
  if (!isReady) {
    return articles_selectors.safeState().filters;
  }

  const { filters } = articles_selectors.safeState();
  const params = new URLSearchParams(window.location.search);
  const status = params.get('Status');
  const tags = params.get('Tags');
  
  return {
    Search: params.get('Search') ?? filters.Search,
    CurrentPage: +(params.get('CurrentPage') ?? filters.CurrentPage),
    ItemsPerPage: +(params.get('ItemsPerPage') ?? filters.ItemsPerPage),
    Status: isArticleStatus(status) ? status : filters.Status,
    Tags: tags ? decodeURIComponent(tags).split(',') : filters.Tags,
    lang,
  };
};

const useArticlesFilters = () => {
  const router = useRouter();
  const lang = useLang();
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

  return {
    filters,
    change,
  };
};

export { useArticlesFilters };
