import type { ResponseError } from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace SignOutStore {
  export interface Actions {
    signOut(): Promise<void>;
  }

  export interface Idle {
    is: 'idle';
  }

  export interface Busy {
    is: 'busy';
  }

  export interface Ok {
    is: 'ok';
  }

  export interface Fail {
    is: 'fail';
    error: ResponseError;
  }

  export type State = Idle | Busy | Ok | Fail;

  export type Is = State['is'];
}

export type { SignOutStore };
