const getLast = <T>(items: T[]): T | undefined =>
  (Array.isArray(items) ? items : []).at(-1);

export { getLast };
