import type { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ARTICLE_COMPONENTS } from '../core';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <MDXProvider components={ARTICLE_COMPONENTS}>{children}</MDXProvider>;
};

export { PageWrapper };
