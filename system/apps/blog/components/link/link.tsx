import NextLink from 'next/link';
import type { LinkProps } from './defs';

const Link = ({ href, children, title }: LinkProps) => {
  return (
    <NextLink href={href} title={title}>
      {children}
    </NextLink>
  );
};

export { Link };
