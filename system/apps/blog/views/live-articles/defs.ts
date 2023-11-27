import type { GetArticlesResponse } from '@system/blog-api-models';
import type { ArticlesStore } from '../../store-factories/articles';

interface LiveArticlesViewProps {
  response: GetArticlesResponse;
  params: ArticlesStore.Params;
}

type TagsObject = Record<string, boolean>;

export type { LiveArticlesViewProps, TagsObject };
