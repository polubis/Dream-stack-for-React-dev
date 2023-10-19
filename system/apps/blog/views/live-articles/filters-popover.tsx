import {
  Badge,
  Box,
  Button,
  CloseIcon,
  FiltersIcon,
  Font,
  Loader,
  Popover,
} from '@system/figa-ui';
import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  type LiveArticlesStore,
  live_articles_selectors,
} from '../../store/live-articles';
import { useLiveArticlesRouter } from './use-live-articles-router';
import { useArticlesTagsStore } from '../../store/articles-tags/articles-tags.store';
import { articles_tags_actions } from '../../store/articles-tags/articles-tags.actions';
import type { ArticleTag, ArticleTags } from '@system/blog-api-models';
import type { TagsObject } from './defs';

const createTagsObject = (params: LiveArticlesStore.Params): TagsObject => {
  return params.Tags.reduce((acc, tag) => {
    acc[tag] = true;
    return acc;
  }, {});
};

const pickActiveTags = (tagsObject: TagsObject): ArticleTags =>
  Object.entries(tagsObject)
    .filter(([, value]) => value)
    .map(([key]) => key);

const FiltersPopover = () => {
  const searchParams = useSearchParams();
  const articlesTagsState = useArticlesTagsStore();
  const { go, getParams } = useLiveArticlesRouter();
  const [activeTags, setActiveTags] = useState<TagsObject>({});
  const liveArticlesState = live_articles_selectors.safeState();

  useEffect(() => {
    setActiveTags(createTagsObject(getParams()));
  }, [searchParams, getParams]);

  const handleTagClick = useCallback((tag: ArticleTag): void => {
    setActiveTags((prevTags) => ({
      ...prevTags,
      [tag]: prevTags[tag] ? false : true,
    }));
  }, []);

  return (
    <Popover
      trigger={({ toggle }) => (
        <Button
          loading={articlesTagsState.is === 'busy' || liveArticlesState.loading}
          className="articles-jumbo-filters-trigger"
          onClick={() => {
            toggle();
            articlesTagsState.is !== 'ok' && articles_tags_actions.load();
          }}
        >
          <FiltersIcon />
        </Button>
      )}
    >
      {({ close }) => (
        <Box
          padding={[250, 250, 250, 250]}
          variant="outlined"
          minWidth="280px"
          maxWidth="500px"
        >
          {(articlesTagsState.is === 'busy' ||
            articlesTagsState.is === 'idle') && (
            <Box margin="auto">
              <Loader size="small" />
            </Box>
          )}

          {articlesTagsState.is === 'ok' && (
            <Box spacing={[250, 500]}>
              <Box orientation="row" between>
                <Font variant="h6">Tags</Font>
                <Button
                  size={1}
                  shape="rounded"
                  variant="outlined"
                  motive="tertiary"
                  onClick={close}
                >
                  <CloseIcon />
                </Button>
              </Box>
              <div className="articles-jumbo-tags">
                {articlesTagsState.tags.map((tag) => (
                  <Badge
                    className="articles-jumbo-tag"
                    key={tag}
                    motive="casual"
                    variant={activeTags[tag] ? 'filled' : 'outlined'}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Box orientation="row" right spacing={[150]}>
                <Button
                  size={2}
                  loading={liveArticlesState.loading}
                  variant="outlined"
                  motive="tertiary"
                  onClick={() => {
                    setActiveTags({});
                  }}
                >
                  Clean
                </Button>
                <Button
                  size={2}
                  loading={liveArticlesState.loading}
                  onClick={() => {
                    close();
                    go(() => ({
                      Tags: pickActiveTags(activeTags),
                      CurrentPage: 1,
                    }));
                  }}
                >
                  Accept
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Popover>
  );
};

export { FiltersPopover };
