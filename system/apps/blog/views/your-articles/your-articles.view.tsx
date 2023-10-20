import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import {
  FilterableArticlesScreen,
  FilterableArticlesScreenProps,
} from '../../components/filterable-articles-screen';
import { useYourArticles } from './use-your-articles';

const pathCreator: FilterableArticlesScreenProps['pathCreator'] = (
  _,
  { url }
) => {
  return `articles/${url}`;
};

const YourArticlesView = () => {
  const [state] = useYourArticles();
  console.log(state)
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
