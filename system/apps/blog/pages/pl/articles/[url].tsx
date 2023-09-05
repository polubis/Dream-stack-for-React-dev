import type { GetStaticProps, GetStaticPaths } from 'next';
import type { ArticlePageParams, ArticlePageProps } from '../../../models';

import { serialize } from 'next-mdx-remote/serialize';
import { getArticle, getArticles } from '@system/blog-api';
import { ArticleView } from '../../../views/article';

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getArticles({ ItemsPerPage: 50, lang: 'pl' });

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
  const article = await getArticle({ ...params, lang: 'pl' });
  const mdx = await serialize(article.data.content);

  return {
    props: {
      url: params.url,
      mdx,
      article: article.data,
    },
  };
};

const ArticlePage = ({ article, ...props }: ArticlePageProps) => {
  return <ArticleView {...props} {...article} />;
};

export default ArticlePage;
