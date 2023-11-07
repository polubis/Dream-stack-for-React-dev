import { MainLayout } from '../../components';
import type { LiveArticlesViewProps } from './defs';
import styled from 'styled-components';
import { ArticlesGrid, OnGoToClick } from '../../components/articles-grid';
import { InfoSection } from '../../components/info-section';
import { Box, Button, Loader, column, tokens } from '@system/figa-ui';
import { useRouter } from 'next/router';
import { useLang } from '../../dk';
import { useCallback, useEffect } from 'react';
import { ArticlesJumbo } from './articles-jumbo';
import { Bar } from '../../components/bar';
import { articles_actions, useArticlesStore } from '../../store/articles';
import { articles_selectors } from '../../store/articles/articles.selectors';
import { ScrollState, useScroll } from '@system/figa-hooks';
import {
  ArticlesFiltersProvider,
  useArticlesFiltersProvider,
} from './articles-filters-provider';

const Container = styled.div`
  ${column()}

  .articles-grid {
    padding: ${tokens.spacing[400]} 0;
  }
`;

const Content = () => {
  const { change } = useArticlesFiltersProvider();
  const router = useRouter();
  const articlesStore = articles_selectors.useState();
  const lang = useLang();

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const articlesStore = articles_selectors.state();
      const { is } = articlesStore;

      if (is === 'idle' || is === 'loading' || is === 'loading-fail')
        throw Error(`Trying to go to in invalid state "${is}"`);

      const id = e.currentTarget.getAttribute('data-article-id');
      const article = articlesStore.articles.find((a) => a.id === id);

      if (!article) throw Error('Cannot find article');

      router.push(`/${lang}/articles/${article.url}`);
    },
    [router, lang]
  );

  const { is } = articlesStore;

  if (is === 'idle' || is === 'loading') {
    return (
      <Box margin="auto">
        <Loader size="big" />
      </Box>
    );
  }

  if (is === 'loading-fail' || is === 'loading-more-fail') {
    return (
      <InfoSection
        title="❌ Ups... Something went wrong!"
        description="Try again with button below or refresh page if problem occurs 🔃."
        footer={
          <Button onClick={() => change({ Search: '', CurrentPage: 1 })}>
            Retry
          </Button>
        }
      />
    );
  }

  if (is === 'all-loaded' || is === 'loaded' || is === 'loading-more') {
    const { articles } = articlesStore;

    return articles.length > 0 ? (
      <ArticlesGrid articles={articles} onGoToClick={handleGoToClick} />
    ) : (
      <InfoSection
        title="No data for provided filters 💨"
        description="Change filters and try again 🔃."
      />
    );
  }

  throw Error('Trying to render in not allowed state');
};

const LiveArticlesView = () => {
  const { change } = useArticlesFiltersProvider();

  const handleLoadMore = useCallback(
    (scroll: ScrollState): void => {
      const articlesStore = articles_selectors.safeState();
      const { is } = articlesStore;
      const shouldLoad =
        scroll.is === 'progress' && scroll.value > 20 && is === 'loaded';

      if (!shouldLoad) return;

      change({
        CurrentPage: articlesStore.filters.CurrentPage + 1,
      });
    },
    [change]
  );

  useScroll({ onScroll: handleLoadMore, throttle: true, delay: 1000 });

  const { filters } = useArticlesFiltersProvider();

  useEffect(() => {
    articles_actions.load(filters);
  }, [filters]);

  return (
    <>
      <MainLayout offPadding>
        <Container>
          <ArticlesJumbo />
          <Content />
        </Container>
      </MainLayout>
      <Bar />
    </>
  );
};

const ConnectedLiveArticlesView = ({
  params,
  response,
}: LiveArticlesViewProps) => {
  const articlesStore = useArticlesStore();

  if (articlesStore.is === 'idle') {
    articles_actions.sync(params, response.data);
  }

  return (
    <ArticlesFiltersProvider>
      <LiveArticlesView />
    </ArticlesFiltersProvider>
  );
};

export { ConnectedLiveArticlesView as LiveArticlesView };
