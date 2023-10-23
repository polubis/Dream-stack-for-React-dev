import { Select } from '@system/figa-ui';
import type { ArticlesStatusSelectProps } from './defs';
import { ARTICLE_STATUSES } from '@system/blog-api';
import { ArticleStatus } from '@system/blog-api-models';

const labels: Record<ArticleStatus, string> = {
  Draft: 'Draft',
  WaitingForApproval: 'Review required',
  Accepted: 'Live',
  NeedWork: 'Improvements required',
};

const ArticlesStatusSelect = ({
  status,
  onChange,
}: ArticlesStatusSelectProps) => {
  return (
    <Select
      placeholder="Choose status"
      value={status}
      onChange={onChange}
      options={ARTICLE_STATUSES.map((status) => ({
        key: status,
        child: labels[status],
      }))}
    />
  );
};

export { ArticlesStatusSelect };
