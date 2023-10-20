import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import { useYourArticles } from './use-your-articles';
import styled from 'styled-components';
import { Box, Loader, column, row, tokens } from '@system/figa-ui';
import { ArticlesSearchInput } from 'apps/blog/components/articles-search-input';
import { ArticlesStatusSelect } from 'apps/blog/components/articles-status-select';

const Container = styled.div`
  ${column()}

  .your-articles-filters {
  }
`;

const YourArticlesView = () => {
  const { state, params, change, equal } = useYourArticles();

  return (
    <>
      <MainLayout>
        <Container>
          <div className="your-articles-filters">
            <div className="your-articles-filters-wrapper">
              <ArticlesSearchInput
                search={params.Search}
                onChange={(Search) => change({ Search, CurrentPage: 1 })}
              />
            </div>

            <ArticlesStatusSelect
              status={params.Status}
              onChange={(Status) => change({ Status, CurrentPage: 1 })}
            />
          </div>
          {(state.loading || !equal) && (
            <Box margin="auto">
              <Loader size="big" />
            </Box>
          )}
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
