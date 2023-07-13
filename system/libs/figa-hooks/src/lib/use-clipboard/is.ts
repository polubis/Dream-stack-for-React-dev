const is =
  <K extends string>(key: K) =>
  (): Readonly<{ is: K }> => ({
    is: key,
  });

const isS =
  <K extends string>(key: K) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <D extends Record<string | number | symbol, any>>() =>
  (data: D): Readonly<D & { is: K }> => ({
    ...data,
    is: key,
  });

export { is, isS };
