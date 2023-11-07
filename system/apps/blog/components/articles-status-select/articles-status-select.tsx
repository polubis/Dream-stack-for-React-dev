import { Select } from '@system/figa-ui';
import { ARTICLE_STATUSES } from '@system/blog-api';
import type { StatusLabelMap } from './defs';
import { useArticlesFiltersProvider } from '../../core/articles-filters-provider/articles-filters-provider';

const labels: StatusLabelMap = {
  Draft: 'Draft',
  WaitingForApproval: 'Review',
  Accepted: 'Published',
  NeedWork: 'Refine',
};

const ArticlesStatusSelect = () => {
  const { filters, change } = useArticlesFiltersProvider();

  return (
    <Select
      placeholder="Choose status"
      value={filters.Status}
      onChange={(Status) =>
        change({
          Status,
        })
      }
      options={ARTICLE_STATUSES.map((status) => ({
        key: status,
        child: labels[status],
      }))}
    />
  );
};

export { ArticlesStatusSelect };
