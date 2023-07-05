import {
  Code,
  CodeBlock,
  Font,
  Link,
  List,
  ListItem,
  Image,
} from '@system/figa-ui';
import type { Components } from '@mdx-js/react/lib';

const ARTICLE_COMPONENTS: Components = {
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
    <Font element="strong" bold variant="b1">
      {children}
    </Font>
  ),
  a: (props) => (
    <Link motive="primary" variant="b1">
      <a {...props} />
    </Link>
  ),
  pre: CodeBlock,
  code: ({ children }) =>
    typeof children === 'string' ? <Code readonly>{children}</Code> : null,
  ul: List,
  ol: ({ children }) => <List ordered>{children}</List>,
  li: ListItem,
  img: ({ src, alt }) => <Image src={src} alt={alt} lazy />,
  em: ({ children }) => (
    <Font italic variant="b1" element="em">
      {children}
    </Font>
  ),
};

export { ARTICLE_COMPONENTS };
