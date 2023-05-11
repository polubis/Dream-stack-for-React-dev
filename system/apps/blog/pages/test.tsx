import type { GetStaticProps } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { PageWrapper } from '../components';

interface Props {
  source: MDXRemoteSerializeResult;
}

export default function Test({ source }: Props) {
  return (
    <PageWrapper>
      <MDXRemote {...source} />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(
    process.cwd(),
    'apps',
    'blog',
    'pages',
    'test.mdx'
  );
  const source = fs.readFileSync(filePath, 'utf8');
  const mdxSource = await serialize(source);

  return {
    props: {
      source: mdxSource,
    },
  };
};
