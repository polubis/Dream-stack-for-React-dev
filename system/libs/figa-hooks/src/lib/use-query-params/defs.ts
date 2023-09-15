// eslint-disable-next-line @typescript-eslint/no-explicit-any
type QueryParamsBase = Record<string, any>;

interface QueryParamsBusy {
  is: 'busy';
}

interface QueryParamsFail {
  is: 'fail';
}

interface QueryParamsOk<T extends QueryParamsBase> {
  is: 'ok';
  query: T;
}

type QueryParamsState<T extends QueryParamsBase> =
  | QueryParamsBusy
  | QueryParamsOk<T>
  | QueryParamsFail;

export type {
  QueryParamsBase,
  QueryParamsBusy,
  QueryParamsFail,
  QueryParamsOk,
  QueryParamsState,
};
