import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { FullArticleDto } from '@system/blog-api-models';

interface ArticleViewProps {
  mdx: MDXRemoteSerializeResult;
  article: FullArticleDto;
}

export type { ArticleViewProps };
