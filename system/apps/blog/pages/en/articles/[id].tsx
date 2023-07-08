import type { GetStaticProps, GetStaticPaths } from 'next';
import type { ArticlePageParams, ArticlePageProps } from '../../../models';

import { serialize } from 'next-mdx-remote/serialize';
import { MainLayout, PageWrapper } from '../../../components';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleLayout } from '@system/figa-ui';
import { getArticles, getArticle } from '@system/blog-api';

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getArticles({ ItemsPerPage: 50 })

  return {
    paths: data.map(({ id }) => ({
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
  const { data } = await getArticle(params)
  const source = await serialize(data.content);

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
        <PageWrapper>
          <MDXRemote {...source} />
        </PageWrapper>
      </ArticleLayout>
    </MainLayout>
  );
};

export default ArticlePage;
