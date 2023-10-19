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
import { useArticlesTagsStore } from './articles-tags.store';

const { setState } = useArticlesTagsStore;

const loadAction = new Subject<void>();
const loadAction$ = loadAction.asObservable();

const articles_tags_actions: ArticlesTagsStore.Actions = {
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

export { articles_tags_actions };
