import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import { useArticlesFiltersProvider } from './articles-filters-provider';

const TagsPopover = () => {
  const { filters, change } = useArticlesFiltersProvider();

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
