import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import { useYourArticles } from './use-your-articles';
import styled from 'styled-components';
import { column, row } from '@system/figa-ui';

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
          <div className="your-articles-filters"></div>
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
