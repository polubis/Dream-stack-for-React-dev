import type { FullArticleDto, Url } from '@system/blog-api-models';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { ArticlesViewProps } from '../views/articles/defs';

interface ArticlePageProps {
  mdx: MDXRemoteSerializeResult;
  article: FullArticleDto;
}

interface ArticlePageParams {
  params: {
    url: Url;
  };
}

type ArticlesPageProps = ArticlesViewProps;

export type { ArticlePageParams, ArticlePageProps, ArticlesPageProps };
