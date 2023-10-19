import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import {
  FilterableArticlesScreen,
  FilterableArticlesScreenProps,
} from '../../components/filterable-articles-screen';
import { useEffect } from 'react';
import { articles_actions } from '../../store/articles';
import { your_articles_actions } from 'apps/blog/store/your-articles';

const pathCreator: FilterableArticlesScreenProps['pathCreator'] = (
  _,
  { url }
) => {
  return `articles/${url}`;
};

const YourArticlesView = () => {
  // useEffect(() => {
  //   const sub = your_articles_actions.init();

  //   return () => {
  //     sub.unsubscribe();
  //   };
  // }, []);

  return (
    <>
      <MainLayout>
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
