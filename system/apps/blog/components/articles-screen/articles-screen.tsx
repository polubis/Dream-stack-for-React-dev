import {
  ArticlesFiltersProvider,
  useArticlesFiltersProvider,
} from '../../core/articles-filters-provider/articles-filters-provider';
import { MainLayout } from '../main-layout';
import { Bar } from '../bar';
import { ArticlesScreenContentProps, ArticlesScreenProps } from './defs';
import { useRouter } from 'next/router';
import { articles_selectors } from '../../store/articles/articles.selectors';
import { useLang } from '../../dk';
import { useCallback, useEffect } from 'react';
import { ArticlesGrid, OnGoToClick } from '../articles-grid';
import { Box, Button, Loader } from '@system/figa-ui';
import { InfoSection } from '../info-section';
import { ScrollState, useScroll } from '@system/figa-hooks';
import { articles_actions } from '../../store/articles';

const Content = ({ path }: ArticlesScreenContentProps) => {
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

      router.push(path(lang, article));
    },
    [router, lang, path]
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

const ArticlesScreen = ({ children }: ArticlesScreenProps) => {
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
      <MainLayout offPadding>{children}</MainLayout>
      <Bar />
    </>
  );
};

const ConnectedArticlesScreen = (props: ArticlesScreenProps) => (
  <ArticlesFiltersProvider>
    <ArticlesScreen {...props} />
  </ArticlesFiltersProvider>
);

ConnectedArticlesScreen.Content = Content;

export { ConnectedArticlesScreen as ArticlesScreen };
