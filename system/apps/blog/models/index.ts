import type { ArticleDto, Url } from '@system/blog-api-models';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface ArticlePageProps {
  url: Url;
  source: MDXRemoteSerializeResult;
}

interface ArticlePageParams {
  params: {
    url: Url;
  };
}

interface ArticlesPageProps {
  articles: ArticleDto[];
}

export type { ArticlePageParams, ArticlePageProps, ArticlesPageProps };
