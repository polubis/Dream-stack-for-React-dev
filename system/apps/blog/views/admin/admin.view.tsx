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
import { ArticlesGrid } from '../../components/articles-grid';
import { useLang } from '../../dk';
import { ExpirationInfo } from '../../components/expiration-info-section';

const Content = () => {
  const lang = useLang();
  const {
    state: { articles, error },
  } = useAdminArticles();

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
        <ArticlesGrid>
          {articles.map((article) => (
            <ArticlesGrid.Tile
              key={article.id}
              status={article.status}
              title={article.title}
              description={article.description}
              thumbnail={article.thumbnailUrl}
              author={article.authorName}
              stack={[
                'React',
                'Angular',
                'NX',
                'TypeScript',
                'JavaScript',
                'NodeJS',
              ]}
              tags={article.tags}
              width={ArticlesGrid.tile_width}
              url={`/${lang}/admin/article-review?url=${article.url}&id=${article.id}`}
            />
          ))}
        </ArticlesGrid>
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
  );
};

const ProtectedAdminView = () => {
  return (
    <MainLayout offPadding>
      <AdminsOnly fallback={<ExpirationInfo />}>
        <AdminView />
      </AdminsOnly>
    </MainLayout>
  );
};

export { ProtectedAdminView as AdminView };
