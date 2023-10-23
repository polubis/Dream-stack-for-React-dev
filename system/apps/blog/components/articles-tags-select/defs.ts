import type { ArticleTags } from '@system/blog-api-models';

type TagsObject = Record<string, boolean>;

interface ArticlesTagsSelectProps {
  tags: ArticleTags;
  onConfirm(tags: ArticleTags): void;
}

export type { ArticlesTagsSelectProps, TagsObject };
