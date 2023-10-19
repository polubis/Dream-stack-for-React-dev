import { getArticles, getError } from '@system/blog-api';
import { useLiveArticlesStore } from './live-articles.store';
import { LiveArticlesStore } from './defs';
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
import { live_articles_selectors } from './live-articles.selectors';
import { isEqual } from 'lodash';

const { setState } = useLiveArticlesStore;

const loadAction = new Subject<LiveArticlesStore.Params>();
const loadAction$ = loadAction.asObservable();

const live_articles_actions: LiveArticlesStore.Actions = {
  load: (params) => {
    loadAction.next(params);
  },
  init: () => {
    return loadAction$
      .pipe(
        map((params) => ({
          params,
          state: live_articles_selectors.safeState(),
        })),
        filter((payload) => !isEqual(payload.params, payload.state.params)),
        tap(() => {
          setState({ loading: true });
        }),
        debounceTime(350),
        switchMap(({ state, params }) => {
          return from(getArticles(params)).pipe(
            tap((response) => {
              const wantLoadMore =
                params.CurrentPage > state.params.CurrentPage;
              const allLoaded = response.data.length < params.ItemsPerPage;

              if (wantLoadMore) {
                response = {
                  ...response,
                  data: [...state.response.data, ...response.data],
                };
              }

              setState({
                loading: false,
                response,
                allLoaded,
                error: null,
                params,
              });
            }),
            catchError((error: unknown) => {
              setState({ loading: false, error: getError(error) });
              return EMPTY;
            })
          );
        })
      )
      .subscribe();
  },
};

export { live_articles_actions };
