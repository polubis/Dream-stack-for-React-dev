import type { GetStaticProps, GetStaticPaths } from 'next';
import type { ArticlePageParams, ArticlePageProps } from '../../../models';

import { serialize } from 'next-mdx-remote/serialize';
import { getArticle, getArticles } from '@system/blog-api';
import { ArticleView } from '../../../views/article';

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getArticles({
    ItemsPerPage: 50,
    lang: 'en',
    Search: '',
    CurrentPage: 1,
    Status: 'Accepted',
    Tags: [],
  });

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
  const mdx = await serialize(article.data.content);

  return {
    props: {
      mdx,
      article: article.data,
    },
  };
};

const ArticlePage = (props: ArticlePageProps) => {
  return <ArticleView {...props} />;
};

export default ArticlePage;
