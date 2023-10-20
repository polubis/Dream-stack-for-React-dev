import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import { useYourArticles } from './use-your-articles';
import styled from 'styled-components';
import { Box, Loader, column, row, tokens } from '@system/figa-ui';
import { ArticlesSearchInput } from '../../components/articles-search-input';
import { ArticlesStatusSelect } from '../../components/articles-status-select';
import { ArticlesTagsSelect } from '../../components/articles-tags-select';

const Container = styled.div`
  ${column()}

  .your-articles-filters {
    ${row()}

    & > *:nth-child(2) {
      margin: 0 ${tokens.spacing[150]};
    }
  }
`;

const YourArticlesView = () => {
  const { state, params, change, equal } = useYourArticles();

  return (
    <>
      <MainLayout>
        <Container>
          <div className="your-articles-filters">
            <ArticlesSearchInput
              search={params.Search}
              onChange={(Search) => change({ Search, CurrentPage: 1 })}
            />
            <ArticlesTagsSelect
              tags={params.Tags}
              onConfirm={(Tags) =>
                change({
                  Tags,
                  CurrentPage: 1,
                })
              }
            />
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
