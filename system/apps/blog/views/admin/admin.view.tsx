import { MainLayout } from '../../components';
import { AdminsOnly } from '../../core';
import { ArticlesLayout } from '../../components/articles-layout';
import { Box, Button, CloseIcon, Field, Loader } from '@system/figa-ui';
import { ArticlesSearchInput } from '../../components/articles-search-input';
import { ArticlesStatusSelect } from '../../components/articles-status-select';
import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import { useAdminArticles } from './use-admin-articles';
import { useScroll } from '@system/figa-hooks';
import { InfoSection } from '../../components/info-section';
import { ArticlesGrid, OnGoToClick } from '../../components/articles-grid';
import { useLang } from '../../dk';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const Content = () => {
  const router = useRouter();
  const lang = useLang();
  const {
    state: { articles, error },
  } = useAdminArticles();

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const id = e.currentTarget.getAttribute('data-article-id');
      const article = (articles ?? []).find((a) => a.id === id);

      if (!article) throw Error('Cannot find article');

      router.push(`/${lang}/admin/article-review?url=${article.url}&id=${id}`);
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
    return (
      <ArticlesLayout.Content>
        <ArticlesGrid articles={articles} onGoToClick={handleGoToClick} />
      </ArticlesLayout.Content>
    );
  }

  return (
    <Box margin="auto">
      <Loader size="big" />
    </Box>
  );
};

const AdminView = () => {
  const {
    state: { loading, articles },
    params,
    hasNotDefaultParams,
    changeSearch,
    changeStatus,
    changeTags,
    changeToNextPage,
    reset,
  } = useAdminArticles();

  useScroll({ onScroll: changeToNextPage });

  return (
    <MainLayout offPadding>
      <ArticlesLayout>
        <ArticlesLayout.Filters>
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
        </ArticlesLayout.Filters>
        <Content />
      </ArticlesLayout>
    </MainLayout>
  );
};

const ProtectedAdminView = () => {
  return (
    <AdminsOnly>
      <AdminView />
    </AdminsOnly>
  );
};

export { ProtectedAdminView as AdminView };
