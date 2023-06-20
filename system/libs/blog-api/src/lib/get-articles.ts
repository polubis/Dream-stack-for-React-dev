import type { GetArticlesResponse } from '@system/blog-api-models';
import { get } from './source';

export const getArticles = get<GetArticlesResponse>({ url: '/api/Articles' });
