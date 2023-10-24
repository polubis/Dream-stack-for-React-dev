import { LeftBar, MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import { useYourArticles } from './use-your-articles';
import styled from 'styled-components';
import {
  Box,
  Button,
  CloseIcon,
  Field,
  Loader,
  T_DOWN,
  column,
  tokens,
} from '@system/figa-ui';
import { ArticlesSearchInput } from '../../components/articles-search-input';
import { ArticlesStatusSelect } from '../../components/articles-status-select';
import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import { ArticlesGrid, type OnGoToClick } from '../../components/articles-grid';
import { InfoSection } from '../../components/info-section';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useLang } from '../../dk';
import { useScroll } from '@system/figa-hooks';

const Container = styled.div`
  ${column()}

  .your-articles-filters {
    display: grid;
    gap: ${tokens.spacing[200]};
    justify-content: center;
    grid-template-columns: 300px 280px auto auto;
    padding: ${tokens.spacing[300]};

    @media ${T_DOWN} {
      width: 100%;
      overflow-x: auto;
      justify-content: flex-start;
    }
  }

  .articles-grid {
    margin: ${tokens.spacing[200]} 0 ${tokens.spacing[300]} 0;
  }
`;

const Content = () => {
  const router = useRouter();
  const lang = useLang();
  const {
    state: { articles, error },
  } = useYourArticles();

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const id = e.currentTarget.getAttribute('data-article-id');
      const article = (articles ?? []).find((a) => a.id === id);

      if (!article) throw Error('Cannot find article');

      if (article.status !== 'Accepted') {
        alert('This article is not published yet - TODO');
        return;
      }

      router.push(`/${lang}/articles/${article.url}`);
    },
    [articles, router, lang]
  );

  if (error) {
    return (
      <InfoSection
        title="❌ Ups... Something went wrong!"
        description="Try again with button below or refresh page if problem occurs 🔃."
        footer={<Button onClick={() => window.location.reload()}>Retry</Button>}
      />
    );
  }

  if (Array.isArray(articles) && articles.length === 0) {
    return (
      <InfoSection
        title="No data for provided filters 💨"
        description="Change filters and try again 🔃."
      />
    );
  }

  if (Array.isArray(articles) && articles.length > 0) {
    return <ArticlesGrid articles={articles} onGoToClick={handleGoToClick} />;
  }

  return (
    <Box margin="auto">
      <Loader size="big" />
    </Box>
  );
};

const YourArticlesView = () => {
  const {
    state: { loading, articles },
    params,
    hasNotDefaultParams,
    changeSearch,
    changeStatus,
    changeTags,
    changeToNextPage,
    reset,
  } = useYourArticles();

  useScroll({ onScroll: changeToNextPage });

  return (
    <>
      <MainLayout offPadding>
        <Container>
          <div className="your-articles-filters">
            <Field label="Search phrase">
              <ArticlesSearchInput
                loading={Array.isArray(articles) && loading}
                search={params.Search}
                onChange={changeSearch}
              />
            </Field>

            <Field label="Status">
              <ArticlesStatusSelect
                status={params.Status}
                onChange={changeStatus}
              />
            </Field>

            <Field label="Tags">
              <ArticlesTagsSelect tags={params.Tags} onConfirm={changeTags} />
            </Field>

            <Field label="Reset">
              <Button
                disabled={!hasNotDefaultParams}
                variant="outlined"
                size={2}
                equal
                onClick={reset}
              >
                <CloseIcon />
              </Button>
            </Field>
          </div>
          <Content />
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
