// eslint-disable-next-line @typescript-eslint/no-explicit-any
type QueryParamsBase = Record<string, any>;

type QueryParamsBusy  ={
  is: 'busy';
}

type QueryParamsFail  ={
  is: 'fail';
}

type QueryParamsOk<T extends QueryParamsBase>  ={
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
