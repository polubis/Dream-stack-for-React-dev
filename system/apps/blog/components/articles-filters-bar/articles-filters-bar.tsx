import { Button, CloseIcon, Field } from '@system/figa-ui';
import { ArticlesStatusSelect } from '../articles-status-select';
import { ArticlesSearchInput } from '../articles-search-input';
import { useArticlesFiltersProvider } from '../../views/live-articles/articles-filters-provider';
import { TagsPopover } from '../../views/live-articles/tags-popover';

const ArticlesFiltersBar = () => {
  const { filters, change } = useArticlesFiltersProvider();

  return (
    <>
      <Field label="Search phrase">
        <ArticlesSearchInput />
      </Field>

      <Field label="Status">
        <ArticlesStatusSelect
          status={filters.Status}
          onChange={(Status) => {
            change({ Status });
          }}
        />
      </Field>

      <Field label="Tags">
        <TagsPopover />
      </Field>

      <Field label="Reset">
        <Button
          //   disabled={!hasNotDefaultParams}
          variant="outlined"
          size={2}
          equal
        //   onClick={() => {}} reset
        >
          <CloseIcon />
        </Button>
      </Field>
    </>
  );
};

export { ArticlesFiltersBar };
