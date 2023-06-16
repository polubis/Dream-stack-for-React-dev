/**
 * This is a facade to work with local storage.
 *
 * It allows you to use session/local storage
 * in a unified way and prevents you from using an invalid key.
 *
 * @param {key} - Specifies data access key.
 * @param {type} - Allows to change from local to session storage if needed.
 */
const storage =
  <T>(type: 'session' | 'local' = 'local') =>
  <K extends string>(key: K) => {
    const storageByType = type === 'local' ? localStorage : sessionStorage;

    return {
      remove: () => {
        storageByType.removeItem(key);
      },
      set: (value: T): void => {
        storageByType.setItem(key, JSON.stringify(value));
      },
      get: (): T | null => {
        const value = storageByType.getItem(key);

        if (value === null) {
          return null;
        }

        return value as T;
      },
      key,
    };
  };

export { storage };
