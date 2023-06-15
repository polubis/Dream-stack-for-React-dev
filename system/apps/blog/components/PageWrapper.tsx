import type { ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { Code, CodeBlock, Font, Link, List, ListItem } from '@system/figa-ui';
import type { Components } from '@mdx-js/react/lib';

const components: Components = {
  h1: ({ children }) => <Font variant="h1">{children}</Font>,
  h2: ({ children }) => <Font variant="h2">{children}</Font>,
  h3: ({ children }) => <Font variant="h3">{children}</Font>,
  h4: ({ children }) => <Font variant="h4">{children}</Font>,
  h5: ({ children }) => <Font variant="h5">{children}</Font>,
  h6: ({ children }) => <Font variant="h6">{children}</Font>,
  p: ({ children }) => (
    <Font element="p" variant="b1">
      {children}
    </Font>
  ),
  strong: ({ children }) => (
    <Font element="strong" variant="b1">
      {children}
    </Font>
  ),
  a: (props) => (
    <Link motive="primary" variant="b1">
      <a {...props} />
    </Link>
  ),
  pre: CodeBlock,
  code: Code,
  ul: List,
  ol: ({ children }) => <List ordered>{children}</List>,
  li: ListItem,
};

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export { PageWrapper };
