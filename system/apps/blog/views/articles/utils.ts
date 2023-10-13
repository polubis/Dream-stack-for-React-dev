import {
  ArticleStatus,
  GetArticlesParams,
  Lang,
} from '@system/blog-api-models';
import { isServer } from '@system/utils';
import { useSearchParams } from 'next/navigation';

const getSearchParam = (param: unknown, defaultSearch: string): string => {
  return typeof param === 'string' ? param : defaultSearch;
};

const getNumericParam = (param: unknown, defaultValue: number): number => {
  if (typeof param !== 'string') return defaultValue;
  const parsedParam = Number.parseInt(param);
  return Number.isNaN(parsedParam) ? defaultValue : parsedParam;
};

const isArticleStatus = (status: unknown): status is ArticleStatus => {
  return (
    ['Accepted', 'Draft', 'NeedWork', 'WaitingForApproval'] as ArticleStatus[]
  ).includes(status as ArticleStatus);
};

const getStatusParam = (
  param: unknown,
  defaultStatus: ArticleStatus
): ArticleStatus => {
  if (!isArticleStatus(param)) return defaultStatus;
  return param;
};

const getSearchParams = (
  lang: Lang,
  searchParams: ReturnType<typeof useSearchParams>
): Readonly<GetArticlesParams> => {
  const defaults: GetArticlesParams = {
    Search: '',
    ItemsPerPage: 20,
    CurrentPage: 1,
    Status: 'Accepted',
    lang,
  };

  if (isServer()) {
    return defaults;
  }

  const params: GetArticlesParams = {
    Search: getSearchParam(searchParams.get('Search'), defaults.Search),
    ItemsPerPage: getNumericParam(
      searchParams.get('ItemsPerPage'),
      defaults.ItemsPerPage
    ),
    CurrentPage: getNumericParam(
      searchParams.get('CurrentPage'),
      defaults.CurrentPage
    ),
    Status: getStatusParam(searchParams.get('Status'), defaults.Status),
    lang,
  };

  return params;
};

export { getSearchParams };
