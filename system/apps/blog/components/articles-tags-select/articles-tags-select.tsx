import {
  Badge,
  Box,
  Button,
  CloseIcon,
  Font,
  Loader,
  Popover,
  TagsIcon,
  tokens,
  wrap,
} from '@system/figa-ui';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { useArticlesTagsStore } from '../../store/articles-tags/articles-tags.store';
import { articles_tags_actions } from '../../store/articles-tags/articles-tags.actions';
import type { ArticleTag, ArticleTags } from '@system/blog-api-models';
import type { TagsObject } from './defs';
import styled from 'styled-components';
import { useArticlesFiltersProvider } from '../../core/articles-filters-provider/articles-filters-provider';

const createTagsObject = (tags: ArticleTags): TagsObject => {
  return tags.reduce((acc, tag) => {
    acc[tag] = true;
    return acc;
  }, {});
};

const toArticleTags = (tagsObject: TagsObject): ArticleTags =>
  Object.entries(tagsObject)
    .filter(([, value]) => value)
    .map(([key]) => key);

const Tags = styled.div`
  ${wrap()}

  .articles-jumbo-tag {
    margin: 0 ${tokens.spacing[100]} ${tokens.spacing[100]} 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ArticlesTagsSelect = () => {
  const { filters, change } = useArticlesFiltersProvider();
  const tags = filters.Tags;
  const articlesTagsState = useArticlesTagsStore();
  const [activeTags, setActiveTags] = useState<TagsObject>({});

  useEffect(() => setActiveTags(createTagsObject(tags)), [tags]);

  const handleTagClick = useCallback((tag: ArticleTag): void => {
    setActiveTags((prevTags) => ({
      ...prevTags,
      [tag]: prevTags[tag] ? false : true,
    }));
  }, []);

  const articleTags = useMemo(() => toArticleTags(activeTags), [activeTags]);

  return (
    <Popover
      trigger={({ toggle }) => (
        <Button
          size={2}
          equal
          className="articles-tags-select-trigger"
          loading={articlesTagsState.is === 'busy'}
          onClick={() => {
            toggle();
            articlesTagsState.is !== 'ok' && articles_tags_actions.load();
          }}
        >
          {tags.length > 0 ? tags.length : <TagsIcon />}
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
              <Tags className="articles-jumbo-tags">
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
              </Tags>
              <Box orientation="row" right spacing={[150]}>
                {articleTags.length > 0 && (
                  <Button
                    size={2}
                    variant="outlined"
                    motive="tertiary"
                    onClick={() => {
                      setActiveTags({});
                    }}
                  >
                    Clean
                  </Button>
                )}

                <Button
                  size={2}
                  onClick={() => {
                    close();
                    change({ Tags: articleTags });
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

export { ArticlesTagsSelect };
