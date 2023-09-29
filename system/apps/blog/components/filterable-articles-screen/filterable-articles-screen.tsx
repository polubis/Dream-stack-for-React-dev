import { ArticlesFiltersHeader } from '../articles-filters-header';
import type { FilterableArticlesScreenProps } from './defs';
import { ArticlesInfiniteSection } from '../articles-infinite-section';

const FilterableArticlesScreen = ({
  pathCreator,
}: FilterableArticlesScreenProps) => {
  return (
    <>
      <ArticlesFiltersHeader />
      <ArticlesInfiniteSection pathCreator={pathCreator} />
    </>
  );
};

export { FilterableArticlesScreen };
