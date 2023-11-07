import type { GetStaticProps } from 'next';
import { HomeView, type HomeViewProps } from '../views/home';
import { getArticles } from '@system/blog-api';
import { articles_factories } from '../store/articles';

export const getStaticProps: GetStaticProps<HomeViewProps> = async () => {
  const response = await getArticles(
    articles_factories.defaultFilters('en', false)
  );

  return {
    props: {
      articles: response.data,
    },
  };
};

const HomePage = ({ articles }: HomeViewProps) => {
  return <HomeView articles={articles} />;
};

export default HomePage;
