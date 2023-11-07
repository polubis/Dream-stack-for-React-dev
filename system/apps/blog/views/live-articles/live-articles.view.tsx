import { MainLayout } from '../../components';
import type { LiveArticlesViewProps } from './defs';
import styled from 'styled-components';
import { useStoreSync } from '../../store/use-store-sync';
import {
  live_articles_selectors,
  useLiveArticlesStore,
} from '../../store/live-articles';
import { ArticlesGrid, OnGoToClick } from '../../components/articles-grid';
import { InfoSection } from '../../components/info-section';
import { Box, Button, Loader, column, tokens } from '@system/figa-ui';
import { useRouter } from 'next/router';
import { useLang } from '../../dk';
import { useCallback, useEffect } from 'react';
import { live_articles_actions } from '../../store/live-articles/live-articles.actions';
import { ArticlesJumbo } from './articles-jumbo';
import { useSearchParams } from 'next/navigation';
import { useLiveArticlesRouter } from './use-live-articles-router';
import { type ScrollState, useScroll } from '@system/figa-hooks';
import { Bar } from '../../components/bar';
import { articles_actions, useArticlesStore } from '../../store/articles';
import { articles_selectors } from 'apps/blog/store/articles/articles.selectors';

const Container = styled.div`
  ${column()}

  .articles-grid {
    padding: ${tokens.spacing[400]} 0;
  }
`;

const Content = () => {
  const { go } = useLiveArticlesRouter();
  const router = useRouter();
  const articlesStore = articles_selectors.useState();
  const lang = useLang();

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const { is } = articlesStore;

      if (is === 'idle' || is === 'loading' || is === 'loading-fail')
        throw Error(`Trying to go to in invalid state "${is}"`);

      const id = e.currentTarget.getAttribute('data-article-id');
      const article = articlesStore.articles.find((a) => a.id === id);

      if (!article) throw Error('Cannot find article');

      router.push(`/${lang}/articles/${article.url}`);
    },
    [router, lang, articlesStore]
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
        footer={<Button onClick={() => go(() => ({}))}>Retry</Button>}
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
  // const { go, getParams } = useLiveArticlesRouter();
  // const searchParams = useSearchParams();

  // const handleLoadMore = useCallback(
  //   (scroll: ScrollState): void => {
  //     const { allLoaded } = live_articles_selectors.safeState();
  //     const shouldLoad =
  //       scroll.is === 'progress' && scroll.value > 20 && !allLoaded;

  //     if (!shouldLoad) return;

  //     go(({ CurrentPage }) => ({ CurrentPage: CurrentPage + 1 }));
  //   },
  //   [go]
  // );

  // useScroll({ onScroll: handleLoadMore });

  // useEffect(
  //   () => live_articles_actions.load(getParams()),
  //   [searchParams, getParams]
  // );

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

  return <LiveArticlesView />;
};

export { ConnectedLiveArticlesView as LiveArticlesView };
