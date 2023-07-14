import type { ArticleDto } from '@system/blog-api-models';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface ArticlePageProps {
  id: string;
  source: MDXRemoteSerializeResult;
}

interface ArticlePageParams {
  params: {
    id: string;
  };
}

interface ArticlesPageProps {
  articles: ArticleDto[];
}

type Lang = 'pl' | 'en';

export type { ArticlePageParams, ArticlePageProps, ArticlesPageProps, Lang };
