import { LeftBar, MainLayout } from '../../components';
import type { LiveArticlesViewProps } from './defs';
import styled from 'styled-components';
import { useStoreSync } from '../../store/use-store-sync';
import {
  live_articles_selectors,
  useLiveArticlesStore,
} from '../../store/live-articles';
import { ArticlesGrid, OnGoToClick } from '../../components/articles-grid';
import { InfoSection } from '../../components/info-section';
import { Button, column, tokens } from '@system/figa-ui';
import { useRouter } from 'next/router';
import { useLang } from '../../dk';
import { useCallback } from 'react';
import { ScrollState, useScroll } from '@system/figa-hooks';
import { live_articles_actions } from '../../store/live-articles/live-articles.actions';
import { ArticlesJumbo } from './articles-jumbo';

const Container = styled.div`
  ${column()}

  .articles-grid {
    padding: ${tokens.spacing[400]} 0;
  }
`;

const LiveArticlesView = () => {
  const router = useRouter();
  const lang = useLang();
  const liveArticlesState = useLiveArticlesStore();

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const liveArticlesState = live_articles_selectors.safeState();
      const id = e.currentTarget.getAttribute('data-article-id');
      const article = liveArticlesState.response.data.find((a) => a.id === id);

      if (!article) throw Error('Cannot find article');

      router.push(`/${lang}/articles/${article.url}`);
    },
    [router, lang]
  );

  const handleLoadMore = useCallback((scroll: ScrollState): void => {
    if (
      scroll.is === 'progress' &&
      scroll.value > 20 &&
      !live_articles_selectors.allLoaded()
    ) {
      live_articles_actions.loadMore();
    }
  }, []);

  useScroll({ onScroll: handleLoadMore });

  if (liveArticlesState.is === 'idle') {
    throw Error('You tried render with ' + liveArticlesState.is);
  }

  return (
    <>
      <MainLayout offPadding>
        <Container>
          <ArticlesJumbo />
          {(liveArticlesState.is === 'ok' ||
            liveArticlesState.is === 'loading_more' ||
            liveArticlesState.is === 'changing_params') &&
          liveArticlesState.response.data.length > 0 ? (
            <ArticlesGrid
              articles={liveArticlesState.response.data}
              onGoToClick={handleGoToClick}
            />
          ) : (
            <InfoSection
              title="No data for provided filters 💨"
              description="Change filters and try again 🔃."
            />
          )}

          {liveArticlesState.is === 'fail' && (
            <InfoSection
              title="❌ Ups... Something went wrong!"
              description="Try again with button below or refresh page if problem occurs 🔃."
              footer={
                <Button onClick={() => window.location.reload()}>Retry</Button>
              }
            />
          )}
        </Container>
      </MainLayout>
      <LeftBar />
    </>
  );
};

const ConnectedLiveArticlesView = (props: LiveArticlesViewProps) => {
  const state = useLiveArticlesStore();
  useStoreSync(
    useLiveArticlesStore,
    { is: 'ok', ...props },
    state.is === 'idle'
  )();

  return <LiveArticlesView />;
};

export { ConnectedLiveArticlesView as LiveArticlesView };
