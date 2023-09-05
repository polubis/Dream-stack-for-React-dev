import type { ArticleDto, FullArticleDto, Url } from '@system/blog-api-models';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface ArticlePageProps {
  url: Url;
  mdx: MDXRemoteSerializeResult;
  article: FullArticleDto;
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
