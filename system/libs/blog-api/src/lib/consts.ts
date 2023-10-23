import type { ArticleStatus } from '@system/blog-api-models';

const ARTICLE_STATUSES: Readonly<ArticleStatus[]> = [
  'Accepted',
  'WaitingForApproval',
  'Draft',
  'NeedWork',
];

export { ARTICLE_STATUSES };
