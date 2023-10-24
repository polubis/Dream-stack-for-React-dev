import { create } from 'zustand';
import type { ArticlesStore } from './defs';
import {
  EMPTY,
  Subject,
  catchError,
  debounceTime,
  filter,
  from,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { isEqual } from 'lodash';
import { getError } from '@system/blog-api';

const createArticlesStore = (config: ArticlesStore.CreatorConfig) => {
  const useStore = create<ArticlesStore.State>(() => ({
    loading: false,
    error: null,
    articles: null,
    params: null,
    allLoaded: false,
  }));

  const selectors: ArticlesStore.Selectors = {
    state: () => useStore.getState(),
    useState: () => useStore((state) => state),
  };

  const changed = new Subject<ArticlesStore.Params>();
  const changed$ = changed.asObservable();

  const actions: ArticlesStore.Actions = {
    load: (params) => {
      changed.next(params);
    },
    init: () => {
      return changed$
        .pipe(
          tap(() => {
            useStore.setState({ loading: true });
          }),
          debounceTime(350),
          map((params) => {
            const state = selectors.state();

            return {
              params,
              state,
              equal: isEqual(params, state.params),
              loadingMore: params.CurrentPage > state.params?.CurrentPage,
            };
          }),
          tap(({ equal }) => {
            equal && useStore.setState({ loading: false });
          }),
          filter(({ equal }) => !equal),
          tap(({ params, equal }) => {
            useStore.setState({ loading: !equal, params });
          }),
          switchMap(({ params, loadingMore, state }) =>
            from(config.service(params)).pipe(
              tap(({ data: articles }) => {
                useStore.setState({
                  loading: false,
                  articles: loadingMore
                    ? [...state.articles, ...articles]
                    : articles,
                  error: null,
                  allLoaded: articles.length < params.ItemsPerPage,
                });
              }),
              catchError((error) => {
                useStore.setState({ loading: false, error: getError(error) });
                return EMPTY;
              })
            )
          )
        )
        .subscribe();
    },
  };

  return [useStore, selectors, actions] as const;
};

export { createArticlesStore };
