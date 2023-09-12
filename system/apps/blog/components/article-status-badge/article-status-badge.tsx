import type { ArticleStatusBadgeMap, ArticleStatusBadgeProps } from './defs';
import { Badge } from '@system/figa-ui';

const map: ArticleStatusBadgeMap = {
  Accepted: <Badge motive="ok">Live</Badge>,
  WaitingForApproval: <Badge motive="secondary">Review required</Badge>,
  Draft: <Badge motive="casual">Draft</Badge>,
  NeedWork: <Badge motive="primary">Require improvements</Badge>,
};

const ArticleStatusBadge = ({ status }: ArticleStatusBadgeProps) => {
  return <>{map[status]}</>;
};

export { ArticleStatusBadge };
