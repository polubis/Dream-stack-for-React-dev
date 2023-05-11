import type { ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';

const components = {};

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export { PageWrapper };
