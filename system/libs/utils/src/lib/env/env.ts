import type { Environment, EnvironmentObject } from './defs';

declare const process: {
  env: Record<string, string>;
};

const getEnv = <T>(): Environment<T> => {
  return process.env as Environment<T>;
};

const env = <T extends EnvironmentObject>(...keys: (keyof T)[]) => {
  const undefinedEntries = keys.filter((key) => getEnv<T>()[key] === undefined);

  if (undefinedEntries.length > 0) {
    throw Error(
      `Following environment variables are "undefined": ${undefinedEntries
        .map((key) => key)
        .join(', ')}`
    );
  }

  return {
    get: <K extends keyof T>(key: K): T[K] => {
      return getEnv<T>()[key];
    },
  };
};

export { env, getEnv };
