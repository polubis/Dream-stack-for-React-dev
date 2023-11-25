import { MainLayout } from '../../components';
import type { LiveArticlesViewProps } from './defs';
import styled from 'styled-components';
import { useStoreSync } from '../../store/use-store-sync';
import {
  live_articles_selectors,
  useLiveArticlesStore,
} from '../../store/live-articles';
import { ArticlesGrid } from '../../components/articles-grid';
import { InfoSection } from '../../components/info-section';
import { Button, column, tokens } from '@system/figa-ui';
import { useLang } from '../../dk';
import { useCallback, useEffect } from 'react';
import { live_articles_actions } from '../../store/live-articles/live-articles.actions';
import { ArticlesJumbo } from './articles-jumbo';
import { useSearchParams } from 'next/navigation';
import { useLiveArticlesRouter } from './use-live-articles-router';
import { type ScrollState, useScroll } from '@system/figa-hooks';
import { LeftBar } from '../../components/main-layout/left-bar';

const Container = styled.div`
  ${column()}

  .articles-grid {
    padding: ${tokens.spacing[400]} 0;
  }
`;

const Content = () => {
  const { go } = useLiveArticlesRouter();
  const { response, error } = live_articles_selectors.useSafeState();
  const lang = useLang();

  if (error) {
    return (
      <InfoSection
        title="❌ Ups... Something went wrong!"
        description="Try again with button below or refresh page if problem occurs 🔃."
        footer={<Button onClick={() => go(() => ({}))}>Retry</Button>}
      />
    );
  }

  return response.data.length > 0 ? (
    <ArticlesGrid>
      {response.data.map((article) => (
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
          url={`/${lang}/articles/${article.url}`}
        />
      ))}
    </ArticlesGrid>
  ) : (
    <InfoSection
      title="No data for provided filters 💨"
      description="Change filters and try again 🔃."
    />
  );
};

const LiveArticlesView = () => {
  const { go, getParams } = useLiveArticlesRouter();
  const searchParams = useSearchParams();

  const handleLoadMore = useCallback(
    (scroll: ScrollState): void => {
      const { allLoaded } = live_articles_selectors.safeState();
      const shouldLoad =
        scroll.is === 'progress' && scroll.value > 20 && !allLoaded;

      if (!shouldLoad) return;

      go(({ CurrentPage }) => ({ CurrentPage: CurrentPage + 1 }));
    },
    [go]
  );

  useScroll({ onScroll: handleLoadMore });

  useEffect(
    () => live_articles_actions.load(getParams()),
    [searchParams, getParams]
  );

  return (
    <>
      <MainLayout offPadding>
        <Container>
          <ArticlesJumbo />
          <Content />
        </Container>
      </MainLayout>
      <LeftBar />
    </>
  );
};

const ConnectedLiveArticlesView = ({
  params,
  response,
}: LiveArticlesViewProps) => {
  const liveArticlesState = useLiveArticlesStore();

  useStoreSync(
    useLiveArticlesStore,
    {
      is: 'safe',
      error: null,
      allLoaded: response.data.length < params.ItemsPerPage,
      initialParams: params,
      params,
      response,
      loading: false,
    },
    liveArticlesState.is === 'idle'
  )();

  return <LiveArticlesView />;
};

export { ConnectedLiveArticlesView as LiveArticlesView };
