import { isServer } from '../is-server';

const isClient = (): boolean => !isServer();

export { isClient };
