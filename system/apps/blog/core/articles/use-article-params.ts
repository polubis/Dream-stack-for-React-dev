import { useQueryParams, QueryParamsState } from '@system/figa-hooks';
import { useMemo } from 'react';
import type { ArticleParams } from './defs';

const isValidParam = (param: unknown): boolean =>
  !!param && !Array.isArray(param);

const useArticleParams = (): QueryParamsState<ArticleParams> => {
  const params = useQueryParams();

  return useMemo((): QueryParamsState<ArticleParams> => {
    if (params.is !== 'ok') return params;

    if (isValidParam(params.query.id) && isValidParam(params.query.url)) {
      return params as QueryParamsState<ArticleParams>;
    }

    return { is: 'fail' };
  }, [params]);
};

export { useArticleParams };
