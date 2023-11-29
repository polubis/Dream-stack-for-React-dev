import { getArticlesTags, getError } from '@system/blog-api';
import { ArticlesTagsStore } from './defs';
import {
  EMPTY,
  Subject,
  catchError,
  debounceTime,
  from,
  switchMap,
  tap,
} from 'rxjs';
import { useArticlesTagsStore } from './store';

const { setState } = useArticlesTagsStore;

const loadAction = new Subject<void>();
const loadAction$ = loadAction.asObservable();

const articles_tags_store_actions: ArticlesTagsStore.Actions = {
  load: () => {
    loadAction.next();
  },
  init: () => {
    return loadAction$
      .pipe(
        tap(() => {
          setState({ is: 'busy' });
        }),
        debounceTime(350),
        switchMap(() => {
          return from(getArticlesTags()).pipe(
            tap((response) => {
              setState({
                is: 'ok',
                tags: response.data,
              });
            }),
            catchError((error: unknown) => {
              setState({ is: 'fail', error: getError(error) });
              return EMPTY;
            })
          );
        })
      )
      .subscribe();
  },
};

articles_tags_store_actions.init();

export { articles_tags_store_actions };
