import type { Url } from './defs';

const isUrl = (url?: string): url is Url => url !== undefined;

export { isUrl };
