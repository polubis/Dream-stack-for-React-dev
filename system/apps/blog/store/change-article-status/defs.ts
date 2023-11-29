import type { Id, ResponseError } from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace ChangeArticleStatusStore {
  export type Idle = { is: 'idle' };
  export type Busy = { is: 'busy' };
  export type Ok = { is: 'ok' };
  export type Fail = { is: 'fail'; error: ResponseError };

  export type State = Idle | Busy | Ok | Fail;

  export interface Actions {
    accept(id: Id): Promise<void>;
    reject(id: Id): Promise<void>;
    sendForApproval(id: Id): Promise<void>;
  }

  export interface Selectors {
    useIs(): State['is'];
  }
}

export type { ChangeArticleStatusStore };
