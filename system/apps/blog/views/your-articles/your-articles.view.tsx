import { MainLayout } from '../../components';
import { SignedInOnly } from '../../core';
import { useYourArticles } from './use-your-articles';
import { Box, Button, CloseIcon, Field, Loader } from '@system/figa-ui';
import { ArticlesSearchInput } from '../../components/articles-search-input';
import { ArticlesStatusSelect } from '../../components/articles-status-select';
import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import { ArticlesGrid } from '../../components/articles-grid';
import { InfoSection } from '../../components/info-section';
import { useLang } from '../../dk';
import { useScroll } from '@system/figa-hooks';
import { ArticlesLayout } from '../../components/articles-layout';
import { ExpirationInfo } from '../../components/expiration-info-section';

const Content = () => {
  const lang = useLang();
  const {
    state: { articles, error },
  } = useYourArticles();

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
            url={`/${lang}/articles/preview?id=${article.id}&url=${article.url}`}
          />
        ))}
      </ArticlesGrid>
    );
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

const ProtectedYourArticlesView = () => (
  <MainLayout offPadding>
    <SignedInOnly fallback={<ExpirationInfo />}>
      <YourArticlesView />
    </SignedInOnly>
  </MainLayout>
);

export { ProtectedYourArticlesView as YourArticlesView };
