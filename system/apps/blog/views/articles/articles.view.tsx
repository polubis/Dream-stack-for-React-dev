import type { ArticlesViewProps } from './defs';

import { LeftBar, MainLayout } from '../../components';
import { useServerStore } from '../../store/use-server-store';
import { useArticlesStore } from '../../store/articles';
import {
  FilterableArticlesScreen,
  type FilterableArticlesScreenProps,
} from '../../components/filterable-articles-screen';

const pathCreator: FilterableArticlesScreenProps['pathCreator'] = (
  _,
  { url }
) => {
  return `articles/${url}`;
};

const ArticlesView = ({ state }: ArticlesViewProps) => {
  useServerStore(useArticlesStore, state)();

  return (
    <>
      <MainLayout>
        <FilterableArticlesScreen pathCreator={pathCreator} />
      </MainLayout>
      <LeftBar />
    </>
  );
};

export { ArticlesView };
