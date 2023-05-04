import type { GetStaticProps, GetStaticPaths } from 'next';

import { Font } from '@system/figa-ui';

interface Post {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { name: 'working-with-oracle-db' } },
      { params: { name: 'working-with-oracle-db1' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Post> = async ({ params }) => {
  return {
    props: {
      id: 'working-with-oracle-db',
    },
  };
};

const ArticlePage = () => {
  return <Font variant="h1">ArticlePage</Font>;
};

export default ArticlePage;
