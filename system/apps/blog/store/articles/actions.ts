import {
  EMPTY,
  Subject,
  Subscription,
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
import type * as Articles from './defs';
import { useArticlesStore } from './store';
import { getArticles, getError, getYourArticles } from '@system/blog-api';
import type { GetArticlesParams } from '@system/blog-api-models';
import { articles_states } from './states';

const { getState: get, setState: set } = useArticlesStore;

const toArticlesParams = ({
  lang,
  query,
  limit,
  page,
  status,
  tags
}: Articles.Filters): GetArticlesParams => ({
  lang,
  Search: query,
  ItemsPerPage: limit,
  CurrentPage: page,
  Status: status,
  Tags: tags
});

const changed = new Subject<Articles.Filters>();
const changed$ = changed.asObservable();

const loadMore = new Subject<Articles.Filters>();
const loadMore$ = loadMore.asObservable();

const subs = new Subscription();

const isOk = (state: Articles.State): state is Articles.Ok => state.is === 'ok';
const checkIsAllLoaded = (items: unknown[], limit: number): boolean =>
  items.length < limit;

subs.add(
  changed$
    .pipe(
      tap((filters) => {
        set({ filters });
      }),
      debounceTime(500),
      tap(() => {
        set({ is: 'busy' });
      }),
      switchMap((filters) =>
        from(
          filters.yours
            ? getYourArticles(toArticlesParams(filters))
            : getArticles(toArticlesParams(filters))
        ).pipe(
          tap(({ data }) => {
            if (checkIsAllLoaded(data, filters.limit)) {
              set({ is: 'all_loaded', articles: data });
              return;
            }

            set({ is: 'ok', articles: data });
          }),
          catchError((error) => {
            set({ is: 'fail', error: getError(error) });
            return EMPTY;
          })
        )
      )
    )
    .subscribe()
);

subs.add(
  loadMore$
    .pipe(
      throttleTime(1000),
      map((filters) => ({ state: get(), filters })),
      filter(({ state }) => isOk(state)),
      map(({ filters, state }) => ({ filters, state: state as Articles.Ok })),
      tap(({ filters }) => {
        set({ is: 'loading', filters });
      }),
      concatMap(({ filters, state }) =>
        from(
          filters.yours
            ? getYourArticles(toArticlesParams(filters))
            : getArticles(toArticlesParams(filters))
        ).pipe(
          tap(({ data }) => {
            if (checkIsAllLoaded(data, filters.limit)) {
              set({ is: 'all_loaded', articles: [...state.articles, ...data] });
              return;
            }

            set({ is: 'ok', articles: [...state.articles, ...data] });
          }),
          catchError((error) => {
            set({ is: 'fail', error: getError(error) });
            return EMPTY;
          }),
          takeUntil(changed$)
        )
      )
    )
    .subscribe()
);

const articles_actions: Articles.Actions = {
  reset: () => {
    set(articles_states.idle());
  },
  init: (filters = {}) => {
    changed.next({
      ...articles_states.idle().filters,
      ...filters,
    });
  },
  changeStatus: (status) => {
    const { filters } = get();

    changed.next({ ...filters, status });
  },
  changeQuery: (query) => {
    const { filters } = get();

    changed.next({
      ...filters,
      query,
      page: 1,
    });
  },
  loadMore: () => {
    const { filters } = get();
    const newFilters: Articles.Filters = {
      ...filters,
      page: filters.page + 1,
    };

    loadMore.next(newFilters);
  },
};

export { articles_actions };
