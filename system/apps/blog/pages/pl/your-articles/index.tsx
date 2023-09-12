import { getArticles } from '@system/blog-api';
import type { YourArticesPageProps } from '../../../models';
import type { GetStaticProps } from 'next';
import { YourArticlesView } from '../../../views/your-artcles';

export const getStaticProps: GetStaticProps<
  YourArticesPageProps
> = async () => {
  const articles = (await getArticles({ ItemsPerPage: 50, lang: 'pl' })).data;

  return {
    props: {
      articles,
    },
  };
};

const YourArticlesPage = ({ articles }: YourArticesPageProps) => {
  return <YourArticlesView articles={articles} />;
};

export default YourArticlesPage;
