import {
  GetArticlesParams,
  GetArticlesResponse,
  ResponseError,
} from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LiveArticlesStore {
  export interface IdleState {
    is: 'idle';
  }

  export interface SafeState {
    is: 'loading_more' | 'changing_params' | 'ok';
    response: GetArticlesResponse;
    params: GetArticlesParams;
  }

  export interface FailState {
    is: 'fail';
    error: ResponseError;
  }

  export type State = IdleState | SafeState | FailState;

  export interface Actions {
    loadMore(): Promise<void>;
    load(params?: Partial<GetArticlesParams>): Promise<void>;
  }

  export interface Selectors {
    safeState(): SafeState;
    allLoaded(): boolean;
    getSearch(): string;
  }
}
