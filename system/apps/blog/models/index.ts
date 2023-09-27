import type { ArticleDto, FullArticleDto, Url } from '@system/blog-api-models';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import * as Articles from '../store/articles/defs';

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
  state: Articles.Ok;
}

export type {
  ArticlePageParams,
  ArticlePageProps,
  ArticlesPageProps,
};
