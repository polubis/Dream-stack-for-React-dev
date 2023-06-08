import type { GetStaticProps, GetStaticPaths } from 'next';
import type { ArticlePageParams, ArticlePageProps } from '../../../models';

import { createArticlePath, getArticlesIds } from '../../../utils';
import { readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { MainLayout } from '../../../components';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleLayout } from '@system/figa-ui';
import { ARTICLE_COMPONENTS } from 'apps/blog/components/PageWrapper';

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await getArticlesIds('en');

  return {
    paths: ids.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params,
}: ArticlePageParams) => {
  const filePath = createArticlePath('en', params.id + '.mdx');
  const source = await serialize(readFileSync(filePath, 'utf8'));

  return {
    props: {
      id: params.id,
      source,
    },
  };
};

const ArticlePage = ({ source }: ArticlePageProps) => {
  return (
    <MainLayout>
      <ArticleLayout>
        <MDXRemote {...source} components={ARTICLE_COMPONENTS} />
      </ArticleLayout>
    </MainLayout>
  );
};

export default ArticlePage;
