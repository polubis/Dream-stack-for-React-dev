import type { ArticlesViewProps } from './defs';

import { LeftBar, MainLayout } from '../../components';
import { useStoreSync } from '../../store/use-store-sync';
import { articles_actions, useArticlesStore } from '../../store/articles';
import {
  FilterableArticlesScreen,
  type FilterableArticlesScreenProps,
} from '../../components/filterable-articles-screen';
import { useEffect } from 'react';

const pathCreator: FilterableArticlesScreenProps['pathCreator'] = (
  _,
  { url }
) => {
  return `articles/${url}`;
};

const ArticlesView = ({ state }: ArticlesViewProps) => {
  useStoreSync(useArticlesStore, state)();

  useEffect(() => {
    return () => {
      articles_actions.reset();
    };
  }, []);

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
