import {
  Box,
  Button,
  Checkbox,
  Divider,
  Field,
  FiltersIcon,
  Font,
  L_DOWN,
  Loader,
  M_DOWN,
  Popover,
  VIEWPORT,
  column,
  tokens,
} from '@system/figa-ui';
import styled from 'styled-components';
import { ArticlesStatusSelect } from '../articles-status-select';
import { ArticlesScreenProps } from './defs';
import { isEqual } from 'lodash';
import { type ReactNode, memo, useCallback, useMemo } from 'react';
import { ArticlesTagsSelect } from '../articles-tags-select';
import { ArticlesSearchInput } from '../articles-search-input';
import { ArticlesGrid } from '../articles-grid';
import { useLang } from '../../dk';
import { InfoSection } from '../info-section';
import { ScrollState, useScroll } from '@system/figa-hooks';
import { Lang } from '@system/blog-api-models';
import type { ArticlesStore } from '../../store-factories/articles';
import { auth_store_selectors } from '../../store/auth';

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
  position: relative;
  padding: ${tokens.spacing[500]} ${tokens.spacing[250]};

  .articles-screen-mobile-filters {
    display: none;
  }

  @media (max-width: 740px) {
    padding: ${tokens.spacing[250]};

    .articles-screen-mobile-filters {
      display: flex;
      margin: 0 0 ${tokens.spacing[300]} auto;
    }
  }

  @media ${M_DOWN} {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: ${tokens.spacing[3500]} 1fr;
  gap: ${tokens.spacing[400]};
  max-width: ${VIEWPORT.mdLaptop}px;
  margin: 0 auto;

  .articles-screen-mobile-filters {
    display: none;
  }

  .articles-content {
    ${column()}

    & > .h6 {
      margin-bottom: ${tokens.spacing[250]};
    }

    .articles-screen-tiles {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: ${tokens.spacing[250]};

      & > * {
        height: 400px;
      }
    }
  }

  @media ${L_DOWN} {
    .articles-content .articles-screen-tiles {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 940px) {
    .articles-content .articles-screen-tiles {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 740px) {
    grid-template-columns: 1fr;

    .articles-content .articles-screen-tiles {
      grid-template-columns: 1fr 1fr;
    }

    .articles-filters {
      display: none;
    }

    .articles-content .info-section {
      margin-top: ${tokens.spacing[1000]} !important;
    }
  }

  @media ${M_DOWN} {
    .articles-content .articles-screen-tiles {
      grid-template-columns: 1fr;
    }
  }
`;

const Filters = styled.div`
  background: ${(props) => props.theme.box.outlined.bg};
  border: ${tokens.spacing[12]} solid
    ${(props) => props.theme.box.outlined.borderColor};
  border-radius: ${tokens.radius[100]};
  height: max-content;
  position: sticky;
  top: ${tokens.spacing[1400]};

  .divider div {
    width: 100%;
    background: ${(props) => props.theme.box.outlined.borderColor};
  }
`;

const makeUrl = (lang: Lang, article: ArticlesStore.Article): string => {
  if (article.status === 'Accepted') {
    return `/${lang}/articles/${article.url}`;
  }

  return `/${lang}/articles/preview?id=${article.id}&url=${article.url}`;
};

const PopoverContent = ({ children }: { children: ReactNode }) => {
  return (
    <Popover.Content minWidth="280px" maxWidth="600px">
      {children}
    </Popover.Content>
  );
};

const PopoverTrigger = ({
  children,
  active,
}: {
  children: ReactNode;
  active: boolean;
}) => {
  const { toggle } = Popover.use();

  return (
    <Popover.Trigger>
      <Box
        className="articles-screen-mobile-filters"
        spacing={[200]}
        orientation="row"
        between
      >
        {children}
        <Button
          size={2}
          shape="rounded"
          variant={active ? 'filled' : 'ghost'}
          motive={active ? 'secondary' : 'tertiary'}
          onClick={toggle}
        >
          <FiltersIcon />
        </Button>
      </Box>
    </Popover.Trigger>
  );
};

const ArticlesScreen = (props: ArticlesScreenProps) => {
  const authorized = auth_store_selectors.useIsAuthorized();
  const { selectors, actions } = props;
  const state = selectors.useState();
  const lang = useLang();

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

  const filters = (
    <Filters className="articles-filters">
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
      <Box
        padding={[250, 250, 250, 250]}
        spacing={[250, 250, authorized ? 250 : 0, 600]}
      >
        <Field label="Search phrase">
          <ArticlesSearchInput
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
        {authorized && (
          <Checkbox
            label="Show your articles"
            checked={state.is === 'idle' ? false : state.params.yours}
            onChange={() =>
              actions.change({ yours: !selectors.safeState().params.yours })
            }
          />
        )}
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
    </Filters>
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
          padding={[0, 0, 0, 0]}
          title="❌ Ups... Something went wrong!"
          description="Try again with button below or refresh page if problem occurs 🔃."
          footer={<Button onClick={actions.reset}>Retry</Button>}
        />
      );
    }

    if (state.articles.length === 0) {
      return (
        <InfoSection
          padding={[0, 0, 0, 0]}
          title="No data for provided filters 💨"
          description="Change filters and try again 🔃."
        />
      );
    }

    return (
      <>
        <Font variant="h6">Results ({state.articles.length})</Font>
        <div className="articles-screen-tiles">
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
        </div>
      </>
    );
  }, [state, lang, actions.reset]);

  return (
    <Wrapper>
      <Popover closeMode="backdrop">
        <PopoverTrigger active={!resetIsDisabled}>
          <Font variant="h5">Articles</Font>
        </PopoverTrigger>
        <PopoverContent>{filters}</PopoverContent>
      </Popover>
      <Container>
        {filters}
        <div className="articles-content">{content}</div>
      </Container>
    </Wrapper>
  );
};

export { ArticlesScreen };
