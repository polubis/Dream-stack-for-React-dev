import type { GetStaticProps } from 'next';
import { HomeView, type HomeViewProps } from '../views/home';
import { getArticles } from '@system/blog-api';

export const getStaticProps: GetStaticProps<HomeViewProps> = async () => {
  const response = await getArticles();

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
