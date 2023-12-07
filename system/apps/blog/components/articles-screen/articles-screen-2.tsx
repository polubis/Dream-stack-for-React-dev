import {
  Box,
  Button,
  Divider,
  Field,
  Font,
  Loader,
  VIEWPORT,
  column,
  tokens,
} from '@system/figa-ui';
import styled from 'styled-components';
import { ArticlesStatusSelect } from '../articles-status-select';
import { ArticlesScreenProps } from './defs';
import { isEqual } from 'lodash';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { ArticlesTagsSelect } from '../articles-tags-select';
import { ArticlesSearchInput } from '../articles-search-input';
import { ArticlesGrid } from '../articles-grid';
import { useLang } from 'apps/blog/dk';
import { InfoSection } from '../info-section';
import { ArticlesStore } from 'apps/blog/store-factories/articles';
import { Lang } from '@system/blog-api-models';
import { isServer } from '@system/utils';
import { isArticleStatus } from '@system/blog-api';
import { ScrollState, useScroll } from '@system/figa-hooks';

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

const Wrapper = styled.div`
  background: #191919;
  padding: ${tokens.spacing[600]} ${tokens.spacing[250]};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: ${tokens.spacing[250]};
  max-width: ${VIEWPORT.laptop}px;
  margin: 0 auto;

  .articles-filters {
    background: ${(props) => props.theme.box.outlined.bg};
    border: ${tokens.spacing[12]} solid #393939;
    border-radius: ${tokens.radius[100]};

    .divider div {
      width: 100%;
      background: ${(props) => props.theme.box.outlined.borderColor};
    }
  }

  .articles-content {
    ${column()}
  }
`;

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

const ArticlesScreen = (props: ArticlesScreenProps) => {
  const { selectors, actions, makeUrl, loadOnInit } = props;
  const state = selectors.useState();
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

  const resetIsDisabled = useMemo(
    () =>
      state.is === 'idle' ? true : isEqual(state.initialParams, state.params),
    [state]
  );

  const content = useMemo(() => {
    if (state.is === 'idle' || state.is === 'loading') {
      return (
        <Box margin="auto">
          <Loader size="big" />
        </Box>
      );
    }

    if (
      state.is === 'changing_fail' ||
      state.is === 'load_more_fail' ||
      state.is === 'loading_fail'
    ) {
      return (
        <InfoSection
          title="❌ Ups... Something went wrong!"
          description="Try again with button below or refresh page if problem occurs 🔃."
          footer={<Button onClick={actions.reset}>Retry</Button>}
        />
      );
    }

    if (state.articles.length === 0) {
      return (
        <InfoSection
          title="No data for provided filters 💨"
          description="Change filters and try again 🔃."
        />
      );
    }

    return (
      <ArticlesGrid>
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
        {state.is === 'loading_more' && (
          <Placeholders length={state.params.ItemsPerPage} />
        )}
      </ArticlesGrid>
    );
  }, [state, lang, makeUrl, actions.reset]);

  return (
    <Wrapper>
      <Container>
        <div className="articles-filters">
          <Box padding={[250, 200, 250, 300]} orientation="row" between>
            <Font variant="h6">Filters</Font>
            <Button
              size={1}
              variant="ghost"
              motive="tertiary"
              disabled={resetIsDisabled}
              onClick={actions.reset}
            >
              Clear All
            </Button>
          </Box>
          <Divider />
          <Box padding={[250, 250, 250, 250]} spacing={[250, 250, 600]}>
            <Field label="Search phrase">
              <ArticlesSearchInput
                loading={state.is === 'changing'}
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

            <Box orientation="row" right spacing={[150]}>
              <Button size={2} motive="tertiary" variant="ghost">
                Save
              </Button>
              <Button size={2} motive="tertiary" variant="ghost">
                Share
              </Button>
            </Box>
          </Box>
        </div>
        <div className="articles-content">{content}</div>
      </Container>
    </Wrapper>
  );
};

export { ArticlesScreen };
