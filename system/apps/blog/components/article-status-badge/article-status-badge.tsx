import type { ArticleStatusBadgeMap, ArticleStatusBadgeProps } from './defs';
import { Badge } from '@system/figa-ui';

const map: ArticleStatusBadgeMap = {
  Accepted: <Badge motive="ok">Published</Badge>,
  WaitingForApproval: <Badge motive="secondary">Review</Badge>,
  Draft: <Badge motive="casual">Draft</Badge>,
  NeedWork: <Badge motive="primary">Refine</Badge>,
};

const ArticleStatusBadge = ({ status }: ArticleStatusBadgeProps) => {
  return <>{map[status]}</>;
};

export { ArticleStatusBadge };
