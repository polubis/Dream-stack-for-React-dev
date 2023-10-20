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
  const { state, params, change } = useYourArticles();

  return (
    <>
      <MainLayout>
        <Container>
          <div className="your-articles-filters">
            <ArticlesSearchInput
              loading={state.loading}
              search={params.Search}
              onChange={(search) =>
                change({ Search: search, CurrentPage: 1 })
              }
            />
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
