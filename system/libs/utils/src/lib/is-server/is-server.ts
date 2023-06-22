const isServer = (): boolean => typeof window === 'undefined';

export { isServer };
