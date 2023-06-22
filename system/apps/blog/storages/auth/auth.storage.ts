import { storage } from '@system/utils';
import type { AuthStorage } from './defs';

const authStorage = storage<AuthStorage>();

export { authStorage };
