import type { StorageType } from './defs';

const getStorage = (type: StorageType): Storage => {
  const storage = type === 'local' ? localStorage : sessionStorage;

  if (!storage) {
    throw Error(`
        Cannot find local storage and session storage.

        It may be caused because: 
            - both are unsupported,
            - you're using this util on a server (during SSR or SSG).
    `);
  }

  return storage;
};

/**
 * This is a facade to work with local/session storage.
 *
 * It allows you to use storages
 * in a unified way and prevents you from using an invalid key.
 *
 * @param {key} - Specifies data access key.
 * @param {type} - Allows to use local/session storage.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storage = <T extends Record<string, any>>(
  type: StorageType = 'local'
) => {
  let keys: (keyof T)[] = [];

  const remove = <K extends keyof T>(key: K): void => {
    getStorage(type).removeItem(key.toString());
    keys = keys.filter((currKey) => currKey !== key);
  };

  const set = <K extends keyof T>(key: K, value: T[K]): void => {
    getStorage(type).setItem(key as string, JSON.stringify(value));
    keys.push(key);
  };

  const get = <K extends keyof T>(key: K): T[K] | null => {
    const value = getStorage(type).getItem(key.toString());

    if (value === null) {
      return null;
    }

    return JSON.parse(value) as T[K];
  };

  const getKeys = (): (keyof T)[] => {
    return keys;
  };

  const clear = (): void => {
    keys.forEach(remove);
  };

  return {
    remove,
    set,
    get,
    getKeys,
    clear,
  };
};

export { storage };
