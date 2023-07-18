import { getArticles } from '@system/blog-api';
import type { ArticlesPageProps } from '../../../models';
import { ArticlesView } from '../../../views/articles';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  const articles = (await getArticles({ ItemsPerPage: 50, lang: 'en' })).data;

  return {
    props: {
      articles,
    },
  };
};

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return <ArticlesView articles={articles} />;
};

export default ArticlesPage;
