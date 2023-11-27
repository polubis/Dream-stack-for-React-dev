import { getError } from '@system/blog-api';
import type { ArticlesStore } from './defs';
import { create } from 'zustand';
import {
  EMPTY,
  Subject,
  catchError,
  concatMap,
  debounceTime,
  filter,
  from,
  map,
  switchMap,
  takeUntil,
  tap,
  throttleTime,
} from 'rxjs';
import { isEqual } from 'lodash';

const checkHasLoadedAll = (
  itemsPerPage: ArticlesStore.Params['ItemsPerPage'],
  articles: ArticlesStore.Articles
): boolean => articles.length < itemsPerPage;

const createArticlesStore = ({ service }: ArticlesStore.Config) => {
  const useStore = create<ArticlesStore.State>(() => ({
    is: 'idle',
  }));

  const set = (state: ArticlesStore.State): void => {
    useStore.setState(state);
  };

  const selectors: ArticlesStore.Selectors = {
    state: () => useStore.getState(),
    useState: () => useStore((state) => state),
    safeState: () => {
      const state = selectors.state();
      if (state.is === 'idle')
        throw Error('Tried to read "idle" state inside "safeState" selector');

      return state;
    },
    useSafeState: () =>
      useStore((state) => {
        if (state.is === 'idle')
          throw Error('Tried to read "idle" state inside "safeState" selector');

        return state;
      }),
    articles: () => {
      const state = selectors.safeState();

      if (
        state.is === 'loaded' ||
        state.is === 'loading_more' ||
        state.is === 'loaded_all' ||
        state.is === 'changing'
      ) {
        return state.articles;
      }

      throw Error('Cannot get articles from state');
    },
  };

  const change = new Subject<Partial<ArticlesStore.Params>>();
  change
    .asObservable()
    .pipe(
      debounceTime(500),
      filter(() => {
        const state = selectors.state();
        return state.is !== 'idle';
      }),
      map((params) => ({
        ...selectors.safeState().params,
        ...params,
        CurrentPage: 1,
      })),
      filter(
        (params) => !isEqual(params, selectors.safeState().previousParams)
      ),
      tap((params) => {
        set({
          is: 'changing',
          articles: selectors.articles(),
          params,
          previousParams: params,
          initialParams: selectors.safeState().initialParams,
        });
      }),
      switchMap((params) =>
        from(service(params)).pipe(
          tap(({ data: articles }) => {
            set({
              is: checkHasLoadedAll(params.ItemsPerPage, articles)
                ? 'loaded_all'
                : 'loaded',
              articles,
              params,
              previousParams: params,
              initialParams: selectors.safeState().initialParams,
            });
          }),
          catchError((error: unknown) => {
            set({
              is: 'changing_fail',
              error: getError(error),
              params,
              previousParams: params,
              initialParams: selectors.safeState().initialParams,
            });
            return EMPTY;
          })
        )
      )
    )
    .subscribe();

  const load = new Subject<ArticlesStore.Params>();
  load
    .asObservable()
    .pipe(
      filter(() => selectors.state().is === 'idle'),
      tap((params) => {
        set({
          is: 'loading',
          params,
          previousParams: params,
          initialParams: params,
        });
      }),
      switchMap((params) =>
        from(service(params)).pipe(
          tap(({ data: articles }) => {
            set({
              is: checkHasLoadedAll(params.ItemsPerPage, articles)
                ? 'loaded_all'
                : 'loaded',
              articles,
              params,
              previousParams: params,
              initialParams: selectors.safeState().initialParams,
            });
          }),
          catchError((error: unknown) => {
            set({
              is: 'loading_fail',
              error: getError(error),
              params,
              previousParams: params,
              initialParams: selectors.safeState().initialParams,
            });
            return EMPTY;
          }),
          takeUntil(change)
        )
      )
    )
    .subscribe();

  const loadMore = new Subject<void>();
  loadMore
    .asObservable()
    .pipe(
      throttleTime(500),
      map(() => selectors.state()),
      filter(({ is }) => is === 'loaded'),
      map(() => selectors.safeState()),
      map(({ params }) => ({ ...params, CurrentPage: params.CurrentPage + 1 })),
      tap((params) => {
        set({
          is: 'loading_more',
          params,
          articles: selectors.articles(),
          previousParams: params,
          initialParams: selectors.safeState().initialParams,
        });
      }),
      concatMap((params) =>
        from(service(params)).pipe(
          tap(({ data: articles }) => {
            set({
              is: checkHasLoadedAll(params.ItemsPerPage, articles)
                ? 'loaded_all'
                : 'loaded',
              articles: [...selectors.articles(), ...articles],
              params,
              previousParams: params,
              initialParams: selectors.safeState().initialParams,
            });
          }),
          catchError((error: unknown) => {
            set({
              is: 'load_more_fail',
              error: getError(error),
              params,
              previousParams: params,
              initialParams: selectors.safeState().initialParams,
            });
            return EMPTY;
          }),
          takeUntil(load),
          takeUntil(change)
        )
      )
    )
    .subscribe();

  const actions: ArticlesStore.Actions = {
    load: (params) => load.next(params),
    loadMore: () => loadMore.next(),
    sync: (params, articles) => {
      set({
        is: checkHasLoadedAll(params.ItemsPerPage, articles)
          ? 'loaded_all'
          : 'loaded',
        articles,
        params,
        previousParams: params,
        initialParams: params,
      });
    },
    change: (params) => change.next(params),
    reset: () => {
      const state = selectors.state();

      if (state.is === 'idle') return;

      set({ is: 'idle' });

      load.next(state.initialParams);
    },
  };

  return [useStore, actions, selectors] as const;
};

export { createArticlesStore };
