import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import type { QueryParamsBase, QueryParamsOk, QueryParamsState } from './defs';

const isValidObject = (obj: unknown): obj is QueryParamsBase =>
  obj !== null && typeof obj === 'object';

/**
 * This hook checks the search params on client side.
 * It's created because Next.js API returns "null" initially on
 * first render, and just after second, it returns the truthy params.
 *
 * That's example of useRouter.query.get('param'):
 * 1. on first render: null,
 * 2. on second render: returns true parameter.
 *
 * Due to that it's really hard to write logic for features
 * based on search params.
 */
const useQueryParams = <T extends QueryParamsBase>() => {
  const router = useRouter();

  const [state, setState] = useState<QueryParamsState<T>>(() => ({
    is: 'busy',
  }));
  const { isReady, query } = router;

  useEffect(() => {
    if (!isReady) return;

    if (!isValidObject(query)) {
      setState({ is: 'fail' });
      return;
    }

    const newState: QueryParamsOk<T> = {
      is: 'ok',
      query: query as T,
    };
    const hasEqualObjects = isEqual(state, newState);

    if (hasEqualObjects) return;

    setState(newState);
  }, [state, isReady, query]);

  return state;
};

export { useQueryParams };
