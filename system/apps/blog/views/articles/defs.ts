import type { GetArticlesResponse } from '@system/blog-api-models';
import type { ArticlesStore } from '../../store-factories/articles';

interface ArticlesViewProps {
  response: GetArticlesResponse;
  params: ArticlesStore.Params;
}

type TagsObject = Record<string, boolean>;

export type { ArticlesViewProps, TagsObject };
