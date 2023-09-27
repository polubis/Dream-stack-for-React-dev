import type { GetStaticPropsResult } from 'next';
import type { ArticlesPageProps } from '../models';
import type { ArticleStatus, Lang } from '@system/blog-api-models';

interface ServerPropsGetters {
  getArticles(
    lang: Lang,
    status: ArticleStatus
  ): Promise<GetStaticPropsResult<ArticlesPageProps>>;
}

export type { ServerPropsGetters };
