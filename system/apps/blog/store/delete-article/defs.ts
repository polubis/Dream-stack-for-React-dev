/* eslint-disable @typescript-eslint/no-namespace */
import type { ResponseError } from '@system/blog-api-models';

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
    
  }

  export interface Selectors {
    state(): State;
    useState(): State;
  }
}

export type { DeleteArticleStore };
