import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import {
  FilterableArticlesScreen,
  FilterableArticlesScreenProps,
} from '../../components/filterable-articles-screen';
import { useEffect } from 'react';
import { articles_actions } from '../../store/articles';

const pathCreator: FilterableArticlesScreenProps['pathCreator'] = (
  _,
  { url }
) => {
  return `articles/${url}`;
};

const YourArticlesView = () => {
  useEffect(() => {
    articles_actions.init({ yours: true });

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

const ProtectedYourArticlesView = () => (
  <SignedInOnly>
    <YourArticlesView />
  </SignedInOnly>
);

export { ProtectedYourArticlesView as YourArticlesView };
