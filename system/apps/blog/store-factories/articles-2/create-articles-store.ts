import { getArticles, getError } from '@system/blog-api';
import { ArticlesStore } from './defs';
import { create } from 'zustand';
import { EMPTY, Subject, catchError, from, switchMap, tap } from 'rxjs';

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
  };

  const load = new Subject<ArticlesStore.Params>();
  load
    .asObservable()
    .pipe(
      tap((params) => {
        set({ is: 'loading', params });
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
            });
          }),
          catchError((error: unknown) => {
            set({ is: 'loading_fail', error: getError(error), params });
            return EMPTY;
          })
        )
      )
    )
    .subscribe();

  const actions: ArticlesStore.Actions = {
    load: load.next,
    sync: (params, articles) => {
      set({
        is: checkHasLoadedAll(params.ItemsPerPage, articles)
          ? 'loaded_all'
          : 'loaded',
        articles,
        params,
      });
    },
  };

  return [useStore, actions, selectors] as const;
};

const [useArticlesStore, articles_actions, articles_selectors] =
  createArticlesStore({
    service: getArticles,
  });

articles_actions.load({
  CurrentPage: 1,
  ItemsPerPage: 20,
  Status: 'Accepted',
  lang: 'pl',
  Search: '',
  Tags: [],
});
