import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { FullArticleDto } from '@system/blog-api-models';

interface ArticleViewProps extends FullArticleDto {
  mdx: MDXRemoteSerializeResult;
}

export type { ArticleViewProps };
