import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import { useYourArticles } from './use-your-articles';
import styled from 'styled-components';
import { column, row } from '@system/figa-ui';
import { ArticlesSearchInput } from 'apps/blog/components/articles-search-input';

const Container = styled.div`
  ${column()}

  .your-articles-filters {
    ${row()}
  }
`;

const YourArticlesView = () => {
  const [state] = useYourArticles();
  console.log(state);
  return (
    <>
      <MainLayout>
        <Container>
          <div className="your-articles-filters">
            <ArticlesSearchInput search="" onChange={(search) => {}} />
          </div>
        </Container>
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
