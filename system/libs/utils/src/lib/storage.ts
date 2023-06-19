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
  type: 'session' | 'local' = 'local'
) => {
  let keys: (keyof T)[] = [];
  const storageByType = type === 'local' ? localStorage : sessionStorage;

  if (!storageByType) {
    throw Error(`
        Cannot find local storage and session storage.

        It may be caused because: 
            - both are unsupported,
            - you're using this util on a server (during SSR or SSG).
    `);
  }

  function remove<K extends keyof T>(key: K): void {
    storageByType.removeItem(key.toString());
    keys = keys.filter((currKey) => currKey !== key);
  }

  function set<K extends keyof T>(key: K, value: T[K]): void {
    storageByType.setItem(key as string, JSON.stringify(value));
    keys.push(key);
  }

  function get<K extends keyof T>(key: K): T[K] | null {
    const value = storageByType.getItem(key.toString());

    if (value === null) {
      return null;
    }

    return JSON.parse(value) as T[K];
  }

  function getKeys(): (keyof T)[] {
    return keys;
  }

  function clear(): void {
    keys.forEach(remove);
  }

  return {
    remove,
    set,
    get,
    getKeys,
    clear,
  };
};

export { storage };
