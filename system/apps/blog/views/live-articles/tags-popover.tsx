import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import { useArticlesFilters } from './use-articles-filters';

const TagsPopover = () => {
  const { filters, change } = useArticlesFilters();

  return (
    <ArticlesTagsSelect
      tags={filters.Tags}
      onConfirm={(Tags) => {
        change({ Tags, CurrentPage: 1 });
      }}
    />
  );
};

export { TagsPopover };
