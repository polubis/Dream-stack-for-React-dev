type Environment<T> = {
  [K in keyof T]: T[K];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EnvironmentObject = Record<string, any>;

type PartialEnvironment<T extends EnvironmentObject> = {
  [K in keyof T]?: T[K];
};

export type { Environment, EnvironmentObject, PartialEnvironment };
