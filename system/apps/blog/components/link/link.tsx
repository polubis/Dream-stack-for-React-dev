import NextLink from 'next/link';
import type { LinkProps } from './defs';

const Link = ({ href, children }: LinkProps) => {
  return <NextLink href={href}>{children}</NextLink>;
};

export { Link };
