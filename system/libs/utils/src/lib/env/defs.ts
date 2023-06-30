// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EnvironmentObject = Record<string, any>;

type EnvironmentGetter = () => string | undefined;

type SafeEnvironmentGetter = () => string;

type EnvironmentGetters<T extends EnvironmentObject> = {
  [K in keyof T]: EnvironmentGetter;
};

type SafeEnvironmentGetters<T extends EnvironmentGetters<T>> = {
  [K in keyof T]: SafeEnvironmentGetter;
};

type Environment<T extends EnvironmentObject> = {
  [K in keyof T]: T[K];
};

export type {
  EnvironmentGetters,
  EnvironmentGetter,
  SafeEnvironmentGetters,
  SafeEnvironmentGetter,
  EnvironmentObject,
  Environment,
};
