import type { ArticleTags, ResponseError } from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ArticlesTagsStore {
  interface IdleState {
    is: 'idle';
  }

  interface BusyState {
    is: 'busy';
  }

  interface OkState {
    is: 'ok';
    tags: ArticleTags;
  }

  interface FailState {
    is: 'fail';
    error: ResponseError;
  }

  export type State = IdleState | BusyState | OkState | FailState;

  export interface Actions {
    load(): void;
    init(): void;
  }
}
