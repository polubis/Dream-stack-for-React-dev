import { Button, CloseIcon, Field } from '@system/figa-ui';
import { ArticlesStatusSelect } from '../articles-status-select';
import { ArticlesSearchInput } from '../articles-search-input';
import { useArticlesFiltersProvider } from '../../core/articles-filters-provider/articles-filters-provider';
import { ArticlesTagsSelect } from '../articles-tags-select';

const ArticlesFiltersBar = () => {
  const { changed, reset } = useArticlesFiltersProvider();

  return (
    <>
      <Field label="Search phrase">
        <ArticlesSearchInput />
      </Field>

      <Field label="Status">
        <ArticlesStatusSelect />
      </Field>

      <Field label="Tags">
        <ArticlesTagsSelect />
      </Field>

      <Field label="Reset">
        <Button
          disabled={!changed}
          variant="outlined"
          size={2}
          equal
          onClick={reset}
        >
          <CloseIcon />
        </Button>
      </Field>
    </>
  );
};

export { ArticlesFiltersBar };
