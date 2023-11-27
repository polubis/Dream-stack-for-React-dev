import { ArticlesLayout } from '../../components/articles-layout';
import { Box, Button, CloseIcon, Field, Loader, tokens } from '@system/figa-ui';
import { ArticlesSearchInput } from '../../components/articles-search-input';
import { ArticlesStatusSelect } from '../../components/articles-status-select';
import { ArticlesTagsSelect } from '../../components/articles-tags-select';
import { ScrollState, useScroll } from '@system/figa-hooks';
import { InfoSection } from '../../components/info-section';
import { ArticlesGrid } from '../../components/articles-grid';
import { useLang } from '../../dk';
import type { ArticlesScreenProps } from './defs';
import styled from 'styled-components';
import { memo, useMemo, type ReactNode, useCallback } from 'react';
import { Lang } from '@system/blog-api-models';
import type { ArticlesStore } from '../../store-factories/articles';
import { isServer } from '@system/utils';
import { useEffect } from 'react';
import { isArticleStatus } from '@system/blog-api';
import { isEqual } from 'lodash';

const Placeholder = styled.div`
  background: ${(props) => props.theme.box.filled.bg};
  border-radius: ${tokens.radius[50]};
`;

const Placeholders = memo(({ length }: { length: number }) => (
  <>
    {Array.from({ length }).map((_, i) => (
      <Placeholder key={i} />
    ))}
  </>
));

Placeholders.displayName = 'Placeholders';

const Layout = ({ children }: { children: ReactNode }) => (
  <ArticlesLayout.Content>
    <ArticlesGrid>{children}</ArticlesGrid>
  </ArticlesLayout.Content>
);

const Content = ({ actions, selectors, makeUrl }: ArticlesScreenProps) => {
  const lang = useLang();

  const state = selectors.useState();
  const { is } = state;

  if (is === 'idle' || is === 'loading') {
    return (
      <Box margin="auto">
        <Loader size="big" />
      </Box>
    );
  }

  const { params } = state;

  if (
    is === 'changing_fail' ||
    is === 'load_more_fail' ||
    is === 'loading_fail'
  ) {
    return (
      <InfoSection
        title="❌ Ups... Something went wrong!"
        description="Try again with button below or refresh page if problem occurs 🔃."
        footer={<Button onClick={actions.reset}>Retry</Button>}
      />
    );
  }

  const { articles } = state;

  if (articles.length === 0) {
    return (
      <InfoSection
        title="No data for provided filters 💨"
        description="Change filters and try again 🔃."
      />
    );
  }

  return (
    <Layout>
      {state.articles.map((article) => (
        <ArticlesGrid.Tile
          key={article.id}
          status={article.status}
          title={article.title}
          description={article.description}
          thumbnail={article.thumbnailUrl}
          author={article.authorName}
          tags={article.tags}
          width={ArticlesGrid.tile_width}
          url={makeUrl(lang, article)}
        />
      ))}
      {is === 'loading_more' && <Placeholders length={params.ItemsPerPage} />}
    </Layout>
  );
};

const getDefaultArticlesParams = (lang: Lang): ArticlesStore.Params => ({
  lang,
  Search: '',
  CurrentPage: 1,
  ItemsPerPage: 20,
  Status: 'Draft',
  Tags: [],
});

const getArticlesParams = (
  lang: Lang,
  defaultParams: ArticlesStore.Params
): ArticlesStore.Params => {
  if (isServer()) return defaultParams;

  const params = new URLSearchParams(window.location.search);
  const status = params.get('Status');
  const tags = params.get('Tags');

  return {
    Search: params.get('Search') ?? defaultParams.Search,
    CurrentPage: +(params.get('CurrentPage') ?? defaultParams.CurrentPage),
    ItemsPerPage: +(params.get('ItemsPerPage') ?? defaultParams.ItemsPerPage),
    Status: isArticleStatus(status) ? status : defaultParams.Status,
    Tags: tags ? decodeURIComponent(tags).split(',') : defaultParams.Tags,
    lang,
  };
};

const Filters = (props: ArticlesScreenProps) => {
  const { selectors, actions } = props;
  const state = selectors.useState();
  const { is } = state;

  const resetIsDisabled = useMemo(
    () =>
      state.is === 'idle' ? true : isEqual(state.initialParams, state.params),
    [state]
  );

  return (
    <ArticlesLayout.Filters>
      <Field label="Search phrase">
        <ArticlesSearchInput
          loading={is === 'changing'}
          search={state.is === 'idle' ? '' : state.params.Search}
          onChange={(Search) => actions.change({ Search })}
        />
      </Field>

      <Field label="Status">
        <ArticlesStatusSelect
          status={state.is === 'idle' ? 'Draft' : state.params.Status}
          onChange={(Status) => actions.change({ Status })}
        />
      </Field>

      <Field label="Tags">
        <ArticlesTagsSelect
          tags={state.is === 'idle' ? [] : state.params.Tags}
          onConfirm={(Tags) => actions.change({ Tags })}
        />
      </Field>

      <Field label="Reset">
        <Button
          disabled={resetIsDisabled}
          variant="outlined"
          size={2}
          equal
          onClick={actions.reset}
        >
          <CloseIcon />
        </Button>
      </Field>
    </ArticlesLayout.Filters>
  );
};

const ArticlesScreen = (props: ArticlesScreenProps) => {
  const { actions, loadOnInit, filters } = props;
  const lang = useLang();

  useEffect(() => {
    if (loadOnInit) {
      actions.load(getArticlesParams(lang, getDefaultArticlesParams(lang)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = useCallback((scroll: ScrollState) => {
    if (scroll.is === 'progress' && scroll.value > 66) {
      actions.loadMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useScroll({ onScroll: handleLoadMore, delay: 0 });

  return (
    <ArticlesLayout>
      {filters ?? <Filters {...props} />}
      <Content {...props} />
    </ArticlesLayout>
  );
};

export { ArticlesScreen };
