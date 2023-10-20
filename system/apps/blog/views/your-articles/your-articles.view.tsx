import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import {
  FilterableArticlesScreen,
  FilterableArticlesScreenProps,
} from '../../components/filterable-articles-screen';
import { useYourArticlesParams } from './use-your-articles-params';

const pathCreator: FilterableArticlesScreenProps['pathCreator'] = (
  _,
  { url }
) => {
  return `articles/${url}`;
};

const YourArticlesView = () => {
  useYourArticlesParams();

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
