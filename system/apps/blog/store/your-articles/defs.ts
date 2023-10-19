import type {
  GetYourArticlesParams,
  GetYourArticlesResponse,
  ResponseError,
} from '@system/blog-api-models';
import type { Subscription } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace YourArticlesStore {
  export interface IdleState {
    is: 'idle';
  }

  export type Params = Required<GetYourArticlesParams>;

  export interface SafeState {
    is: 'safe';
    isLoading: boolean;
    initialParams: Params;
    response: GetYourArticlesResponse;
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
