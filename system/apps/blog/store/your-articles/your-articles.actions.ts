import { getError, getYourArticles } from '@system/blog-api';
import { YourArticlesStore } from './defs';
import { useYourArticlesStore } from './your-articles.store';
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
import { your_articles_selectors } from './your-articles.selectors';
import { isEqual } from 'lodash';

const { setState } = useYourArticlesStore;

const changed = new Subject<YourArticlesStore.Params>();
const changed$ = changed.asObservable();

const your_articles_actions: YourArticlesStore.Actions = {
  load: (params) => {
    changed.next(params);
  },
  init: () => {
    return changed$
      .pipe(
        tap(() => {
          setState({ loading: true });
        }),
        debounceTime(350),
        map((params) => {
          const state = your_articles_selectors.state();

          return {
            params,
            state,
            equal: isEqual(params, state.params),
            loadingMore: params.CurrentPage > state.params?.CurrentPage,
          };
        }),
        tap(({ equal }) => {
          equal && setState({ loading: false });
        }),
        filter(({ equal }) => !equal),
        tap(({ params, equal }) => {
          setState({ loading: !equal, params });
        }),
        switchMap(({ params, loadingMore, state }) =>
          from(getYourArticles(params)).pipe(
            tap(({ data: articles }) => {
              setState({
                loading: false,
                articles: loadingMore
                  ? [...state.articles, ...articles]
                  : articles,
                error: null,
                allLoaded: articles.length < params.ItemsPerPage,
              });
            }),
            catchError((error) => {
              setState({ loading: false, error: getError(error) });
              return EMPTY;
            })
          )
        )
      )
      .subscribe();
  },
};

export { your_articles_actions };
