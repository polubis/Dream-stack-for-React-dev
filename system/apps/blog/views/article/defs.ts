import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { FullArticleDto } from '@system/blog-api-models';

type ArticleViewProps = FullArticleDto & {
  mdx: MDXRemoteSerializeResult;
};

export type { ArticleViewProps };
