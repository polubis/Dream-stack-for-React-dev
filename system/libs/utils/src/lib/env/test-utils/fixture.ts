import type { EnvironmentObject } from '../defs';
import { getEnv } from '../env';

const setupDefaults = (defaults: Record<string, string | undefined>): void => {
  Object.keys(defaults).forEach((key) => {
    const initial = process.env[key];
    process.env[key] = initial ?? defaults[key];
  });
};

const envFixture = <T extends EnvironmentObject>(defaults: T) => {
  const keys = Object.keys(defaults) as (keyof T)[];

  setupDefaults(defaults);

  return {
    setup: (): void => {
      setupDefaults(defaults);
    },
    get: <K extends keyof T>(key: K): T[K] => {
      return getEnv<T>()[key];
    },
    set: <K extends keyof T>(key: K, value: T[K]): void => {
      getEnv<T>()[key] = value;
    },
    delete: <K extends keyof T>(key: K): void => {
      delete getEnv<T>()[key];
    },
    restore: <K extends keyof T>(key: K): void => {
      getEnv<T>()[key] = defaults[key];
    },
    deleteAll: (): void => {
      keys.forEach((key) => {
        delete getEnv<T>()[key];
      });
    },
    restoreAll: (): void => {
      keys.forEach((key) => {
        getEnv<T>()[key] = defaults[key];
      });
    },
  };
};

export { envFixture };
