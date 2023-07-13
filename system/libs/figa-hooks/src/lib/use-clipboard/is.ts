export type Isable<K extends string> = {
  is: K;
  (): Readonly<{ is: K }>;
};

const is = <K extends string>(key: K) => {
  const fn = (): Readonly<{ is: K }> => ({
    is: key,
  });

  Object.defineProperty(fn, 'is', { writable: true, value: key });

  return fn as Isable<K>;
};

const isS =
  <K extends string>(key: K) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <D extends Record<string | number | symbol, any>>() =>
  (data: D): Readonly<D & { is: K }> => ({
    ...data,
    is: key,
  });

export { is, isS };
