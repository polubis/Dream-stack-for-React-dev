import type { GetStaticProps, GetStaticPaths } from 'next';
import type { ArticlePageParams, ArticlePageProps } from '../../../models';

import { serialize } from 'next-mdx-remote/serialize';
import { MainLayout, PageWrapper } from '../../../components';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleLayout } from '@system/figa-ui';
import { getArticle, getArticles } from '@system/blog-api';

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getArticles({ ItemsPerPage: 50, lang: 'en' });

  return {
    paths: data.map(({ url }) => ({
      params: {
        url,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params,
}: ArticlePageParams) => {
  const article = await getArticle({ ...params, lang: 'en' });
  const source = await serialize(article.data.content);

  return {
    props: {
      url: params.url,
      source,
    },
  };
};

const ArticlePage = ({ source }: ArticlePageProps) => {
  return (
    <MainLayout>
      <ArticleLayout thumbnail={null}>
        <PageWrapper>
          <MDXRemote {...source} />
        </PageWrapper>
      </ArticleLayout>
    </MainLayout>
  );
};

export default ArticlePage;
