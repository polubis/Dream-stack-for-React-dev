import type {
  GetArticlesParams,
  GetArticlesResponse,
  ResponseError,
} from '@system/blog-api-models';
import type { Subscription } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LiveArticlesStore {
  export interface IdleState {
    is: 'idle';
  }

  export type Params = GetArticlesParams;

  export interface SafeState {
    is: 'safe';
    loading: boolean;
    initialParams: Params;
    response: GetArticlesResponse;
    params: Params;
    allLoaded: boolean;
    error: ResponseError | null;
  }

  export type State = IdleState | SafeState;

  export interface Selectors {
    safeState(): SafeState;
    useSafeState(): SafeState;
  }

  export interface Actions {
    load(params: Params): void;
    init(): Subscription;
  }
}
