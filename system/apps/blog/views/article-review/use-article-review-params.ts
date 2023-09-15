import { useQueryParams, QueryParamsState } from '@system/figa-hooks';
import { ArticleReviewParams } from './defs';
import { useMemo } from 'react';

const isValidParam = (param: unknown): boolean =>
  !!param && !Array.isArray(param);

const useArticleReviewParams = (): QueryParamsState<ArticleReviewParams> => {
  const params = useQueryParams();

  return useMemo((): QueryParamsState<ArticleReviewParams> => {
    if (params.is !== 'ok') return params;

    if (isValidParam(params.query.id) && isValidParam(params.query.url)) {
      return params as QueryParamsState<ArticleReviewParams>;
    }

    return { is: 'fail' };
  }, [params]);
};

export { useArticleReviewParams };
