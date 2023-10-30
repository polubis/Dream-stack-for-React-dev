import type { Content } from '@system/blog-api-models';
import type { MarkdownToJSX } from 'markdown-to-jsx';
import type { ReactNode } from 'react';

interface ArticleScreenProps {
  body(
    articleMdxOptions: { overrides: MarkdownToJSX.Overrides },
    content: Content
  ): ReactNode;
  dynamic?: boolean;
}

export type { ArticleScreenProps };
