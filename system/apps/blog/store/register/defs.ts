import type { RegisterPayload, ResponseError } from '@system/blog-api-models';
import type { FormState } from '@system/utils';

type RegisterActions = {
  setField: <K extends keyof RegisterPayload, V extends RegisterPayload[K]>(
    key: K,
    value: V
  ) => void;
  submit: () => Promise<void>;
};

type RegisterState = RegisterActions & {
  key: 'idle' | 'pending' | 'ok' | 'error';
  form: FormState<RegisterPayload>;
  error: ResponseError | null;
};

type RegisterStore = RegisterState & RegisterActions;

type RegisterStateKey = RegisterState['key'];

export type { RegisterStore, RegisterActions, RegisterState, RegisterStateKey };
