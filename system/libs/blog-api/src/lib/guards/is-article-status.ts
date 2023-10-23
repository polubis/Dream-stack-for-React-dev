import type { ArticleStatus } from '@system/blog-api-models';
import { ARTICLE_STATUSES } from '../consts';

const isArticleStatus = (status: string): status is ArticleStatus =>
  ARTICLE_STATUSES.some((currentStatus) => currentStatus === status);

export { isArticleStatus };
