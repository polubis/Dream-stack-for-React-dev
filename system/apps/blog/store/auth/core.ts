import { storage } from '@system/utils';
import type { AuthStore } from './defs';

const authStorage = storage<AuthStore.Storage>();

export { authStorage };
