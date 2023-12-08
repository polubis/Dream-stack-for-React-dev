import NextLink from 'next/link';
import type { LinkProps } from './defs';

const Link = ({ href, children, title }: LinkProps) => {
  return (
    <NextLink prefetch={false} href={href} title={title}>
      {children}
    </NextLink>
  );
};

export { Link };
