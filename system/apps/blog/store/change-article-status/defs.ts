import type { Id, ResponseError } from '@system/blog-api-models';

type Idle = { is: 'idle' };
type Busy = { is: 'busy' };
type Ok = { is: 'ok' };
type Fail = { is: 'fail'; error: ResponseError };

type State = Idle | Busy | Ok | Fail;

type Actions =  {
  accept(id: Id): Promise<void>;
  reject(id: Id): Promise<void>;
}

export type { Actions, State };
