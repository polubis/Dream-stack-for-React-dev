/* eslint-disable @typescript-eslint/no-namespace */
import type { Id, ResponseError } from '@system/blog-api-models';

namespace DeleteArticleStore {
  export type Idle = { is: 'idle' };
  export type Busy = { is: 'busy' };
  export type Ok = { is: 'ok' };
  export type Fail = {
    is: 'fail';
    error: ResponseError;
  };

  export type State = Idle | Busy | Ok | Fail;

  export interface Actions {
    reset(): void;
    delete(id: Id): Promise<void>;
  }

  export interface Selectors {
    state(): State;
    useState(): State;
    safeState(): Ok;
    useSafeState(): Ok;
  }
}

export type { DeleteArticleStore };
