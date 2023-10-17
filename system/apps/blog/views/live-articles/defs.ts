import type { GetArticlesResponse } from '@system/blog-api-models';
import type { LiveArticlesStore } from '../../store/live-articles';

interface LiveArticlesViewProps {
  response: GetArticlesResponse;
  params: LiveArticlesStore.Params;
}

export type { LiveArticlesViewProps };
