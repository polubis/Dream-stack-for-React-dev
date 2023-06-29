import { env } from '@system/utils';
import type { BlogEnv } from '../../models';

const blogEnv = env<BlogEnv>('NEXT_PUBLIC_API_URL');

export { blogEnv };
