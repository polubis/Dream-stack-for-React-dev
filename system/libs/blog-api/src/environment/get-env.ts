import type { APIEnv, APIEnvKey, EnvVar } from './defs';

declare const process: {
  env: APIEnv;
};

const getEnv = <K extends APIEnvKey>(key: K): EnvVar<K> => [
  key,
  process.env[key],
];

const setEnv = <K extends APIEnvKey>(key: K, value: APIEnv[K]): void => {
  process.env[key] = value;
};

export { getEnv, setEnv };
