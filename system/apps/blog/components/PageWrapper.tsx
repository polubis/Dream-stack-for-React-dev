import type { ReactNode, ReactElement } from 'react';
import { Children, isValidElement } from 'react'

import { MDXProvider } from '@mdx-js/react';
import { Code, CodeBlock, Font, Link, List, Image, ListItem } from '@system/figa-ui';
import type { Components } from '@mdx-js/react/lib';
import NextImage from 'next/image';

const isImg = (el: ReactElement<unknown>): el is ReactElement<HTMLImageElement> =>
  el.type === 'img'

const getImgTag = (children: ReactNode): ReactElement<HTMLImageElement> | undefined => {
  const elements = Children.toArray(children).filter(isValidElement)
  const img = elements.find(isImg) ?? undefined;

  return img;
}

const isEm = (el: ReactElement<unknown>): el is ReactElement<HTMLImageElement> =>
  el.type === 'em'

const getImgCaption = (children: ReactNode): ReactElement<HTMLElement> | undefined => {
  const elements = Children.toArray(children).filter(isValidElement)
  const em = elements.find(isEm) ?? undefined;

  return em;
}

const imageLoader = ({ src, width, quality }) =>
  `${src}?w=${width}&q=${quality || 75}`;

const components: Components = {
  h1: ({ children }) => <Font variant="h1">{children}</Font>,
  h2: ({ children }) => <Font variant="h2">{children}</Font>,
  h3: ({ children }) => <Font variant="h3">{children}</Font>,
  h4: ({ children }) => <Font variant="h4">{children}</Font>,
  h5: ({ children }) => <Font variant="h5">{children}</Font>,
  h6: ({ children }) => <Font variant="h6">{children}</Font>,
  p: ({ children }) => {
    const img = getImgTag(children)

    if (img) {
      return (
        <Image caption={getImgCaption(children)}>
          <NextImage
            loader={imageLoader}
            src={img.props.src}
            alt={img.props.alt}
            width={250}
            height={250}
          />
        </Image>
      )
    }

    return (
      <Font element="p" variant="b1">
        {children}
      </Font>
    )
  },
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
  li: ListItem
};

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export { PageWrapper };
