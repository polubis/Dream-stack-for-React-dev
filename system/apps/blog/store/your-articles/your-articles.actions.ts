import { getArticles, getError } from '@system/blog-api';
import { useYourArticlesStore } from './your-articles.store';
import { YourArticlesStore } from './defs';
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
import { your_articles_selectors } from './your-articles.selectors';

const { setState } = useYourArticlesStore;

const loadAction = new Subject<YourArticlesStore.Params>();
const loadAction$ = loadAction.asObservable();

export const your_articles_actions: YourArticlesStore.Actions = {
  load: (params) => {
    loadAction.next(params);
  },
  init: () => {
    return loadAction$
      .pipe(
        map((params) => ({
          params,
          state: your_articles_selectors.safeState(),
        })),
        filter((payload) => !isEqual(payload.params, payload.state.params)),
        tap(() => {
          setState({ isLoading: true });
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
                isLoading: false,
                response,
                allLoaded,
                error: null,
                params,
              });
            }),
            catchError((error: unknown) => {
              setState({ isLoading: false, error: getError(error) });
              return EMPTY;
            })
          );
        })
      )
      .subscribe();
  },
};
