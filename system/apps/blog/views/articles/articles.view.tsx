import { useEffect, useCallback, useMemo } from 'react';
import {
  live_articles_actions,
  live_articles_selectors,
} from '../../store/live-articles';
import { LeftBar, MainLayout } from '../../components';
import {
  Box,
  Button,
  Font,
  Input,
  Loader,
  SM_DOWN,
  T_DOWN,
  column,
  tokens,
} from '@system/figa-ui';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useLang } from '../../dk';
import { ArticlesGrid, type OnGoToClick } from '../../components/articles-grid';
import { type ScrollState, useScroll } from '@system/figa-hooks';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { getSearchParams } from './utils';

const Container = styled.div`
  ${column()}
`;

const ArticlesJumbo = styled.div`
  position: relative;
  padding: ${tokens.spacing[250]};
`;

const ArticlesView = () => {
  const router = useRouter();
  const lang = useLang();
  const liveArticlesState = live_articles_selectors.useState();
  const { is } = liveArticlesState;
  const searchParams = useSearchParams();

  const params = useMemo(
    () => getSearchParams(lang, searchParams),
    [lang, searchParams]
  );

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const id = e.currentTarget.getAttribute('data-article-id');

      if (!id) throw Error('Cannot find article id');

      const article = live_articles_selectors
        .articles()
        .find((a) => a.id === id);

      if (!article) throw Error('Cannot find article');

      router.push(`/${lang}/articles/${article.url}`);
    },
    [router, lang]
  );

  const handleLoadMore = useCallback(
    (scroll: ScrollState): void => {
      if (
        live_articles_selectors.is('ok') &&
        !live_articles_selectors.allLoaded() &&
        scroll.is === 'progress' &&
        scroll.value > 20
      ) {
        const query = { ...params, CurrentPage: params.CurrentPage + 1 };
        router.push(router.asPath, { query }, { shallow: true });
        live_articles_actions.loadMore(query);
      }
    },
    [params, router]
  );

  const handleInitialization = useCallback((): void => {
    if (router.isReady && live_articles_selectors.is('busy'))
      live_articles_actions.initialize(params);
  }, [router.isReady, params]);

  useEffect(handleInitialization, [handleInitialization]);
  useScroll({ onScroll: handleLoadMore });

  return (
    <>
      <MainLayout offPadding>
        <Container>
          <ArticlesJumbo>
            <Image
              fill
              priority
              src={'/assets/bubbles.png'}
              title="Articles filters"
              alt="Articles filters"
              sizes={`${SM_DOWN} 100%, ${T_DOWN}800px, 1080px`}
            />
            <Box>
              <Input
                value={params.Search}
                placeholder="🏸 Type to find article..."
                onChange={(e) => {}}
              />
            </Box>
          </ArticlesJumbo>
          {is === 'busy' && (
            <Box margin="auto">
              <Loader size="big" />
            </Box>
          )}
          {(is === 'ok' || is === 'loading') && (
            <ArticlesGrid
              articles={liveArticlesState.articles}
              onGoToClick={handleGoToClick}
            />
          )}
          {is === 'fail' && (
            <Box
              orientation="column"
              margin="auto"
              variant="outlined"
              maxWidth="400px"
              padding={[400, 400, 400, 400]}
              spacing={[150, 400]}
            >
              <Font variant="h6">❌ Ups... Something went wrong!</Font>
              <Font variant="b1">
                Try again with button below or refresh page if problem occurs
                🔃.
              </Font>
              <Button onClick={handleInitialization}>Retry</Button>
            </Box>
          )}
        </Container>
      </MainLayout>
      <LeftBar />
    </>
  );
};

export { ArticlesView };
