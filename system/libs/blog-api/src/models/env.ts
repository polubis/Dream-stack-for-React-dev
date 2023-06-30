import type { blogEnv } from '../lib/env';

type BlogEnv = ReturnType<(typeof blogEnv)['getAll']>;

export type { BlogEnv };
