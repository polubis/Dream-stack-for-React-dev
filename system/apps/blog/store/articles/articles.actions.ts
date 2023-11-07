import { getArticles, getError } from '@system/blog-api';
import { articles_selectors } from './articles.selectors';
import { useArticlesStore } from './articles.store';
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

const { setState } = useArticlesStore;

const checkHasAllLoaded = (
  filters: ArticlesStore.Filters,
  articles: ArticlesStore.Articles
) => {
  return articles.length < filters.ItemsPerPage;
};

const set = (state: ArticlesStore.State): void => {
  setState(state, true);
};

const changed = new Subject<Partial<ArticlesStore.Filters>>();
const changed$ = changed.asObservable();

const articles_actions: ArticlesStore.Actions = {
  sync: (filters, articles) => {
    set({
      is: checkHasAllLoaded(filters, articles) ? 'all-loaded' : 'loaded',
      filters,
      articles,
    });
  },
  load: async (newFilters) => {
    changed.next(newFilters);
  },
};

changed$
  .pipe(
    debounceTime(500),
    map((filters) => {
      const state = articles_selectors.safeState();
      const newFilters = { ...state.filters, ...filters };
      const currentFilters = state.filters;

      return {
        state,
        newFilters,
        currentFilters,
      };
    }),
    filter(
      ({ newFilters, currentFilters }) => !isEqual(newFilters, currentFilters)
    ),
    tap(({ newFilters }) => {
      set({ is: 'loading', filters: newFilters });
    }),
    switchMap(({ newFilters }) => {
      return from(getArticles(newFilters)).pipe(
        tap(({ data: articles }) => {
          set({
            is: checkHasAllLoaded(newFilters, articles)
              ? 'all-loaded'
              : 'loaded',
            articles,
            filters: newFilters,
          });
        }),
        catchError((error) => {
          set({
            is: 'loading-fail',
            error: getError(error),
            filters: newFilters,
          });
          return EMPTY;
        })
      );
    })
  )
  .subscribe();

export { articles_actions };
