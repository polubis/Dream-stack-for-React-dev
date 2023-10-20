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
import { useArticlesTagsStore } from '../../store/articles-tags/articles-tags.store';
import { articles_tags_actions } from '../../store/articles-tags/articles-tags.actions';
import type { ArticleTag, ArticleTags } from '@system/blog-api-models';
import type { TagsObject } from './defs';

const createTagsObject = (tags: ArticleTags): TagsObject => {
  return tags.reduce((acc, tag) => {
    acc[tag] = true;
    return acc;
  }, {});
};

const pickActiveTags = (tagsObject: TagsObject): ArticleTags =>
  Object.entries(tagsObject)
    .filter(([, value]) => value)
    .map(([key]) => key);

const ArticlesTagsSelect = ({ tags, onConfirm }) => {
  const articlesTagsState = useArticlesTagsStore();
  const [activeTags, setActiveTags] = useState<TagsObject>({});

  useEffect(() => setActiveTags(createTagsObject(tags)), [tags]);

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
          loading={articlesTagsState.is === 'busy'}
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
                  onClick={() => {
                    close();
                    onConfirm(pickActiveTags(activeTags));
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
