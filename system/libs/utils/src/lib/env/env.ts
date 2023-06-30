import type {
  EnvironmentGetters,
  SafeEnvironmentGetters,
  EnvironmentGetter,
  SafeEnvironmentGetter,
} from './defs';

const toSafeGetters = <T extends EnvironmentGetters<T>>(
  getters: T
): SafeEnvironmentGetters<T> => {
  const entries = Object.entries(getters) as [keyof T, EnvironmentGetter][];
  const undefinedEntries = entries.filter(
    ([, getter]) => getter() === undefined
  );

  if (undefinedEntries.length > 0) {
    throw Error(
      `Following environment variables are "undefined": ${undefinedEntries
        .map((key) => key)
        .join(', ')}`
    );
  }

  return getters as SafeEnvironmentGetters<T>;
};

const env = <T extends EnvironmentGetters<T>>(getters: T) => {
  const safeGetters = toSafeGetters(getters);

  return {
    get: <K extends keyof T>(key: K): string => {
      return safeGetters[key]();
    },
    getAll: () => {
      return (
        Object.entries(safeGetters) as [keyof T, SafeEnvironmentGetter][]
      ).reduce<Record<keyof T, string>>((acc, [key, getter]) => {
        acc[key] = getter();
        return acc;
      }, {} as Record<keyof T, string>);
    },
  };
};

export { env };
