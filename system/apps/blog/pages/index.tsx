import type { GetStaticProps } from 'next';
import { HomeView, type HomeViewProps } from '../views/home';

export const getStaticProps: GetStaticProps<HomeViewProps> = async () => {
  return {
    props: {
      articles: [],
    },
  };
};

const HomePage = ({ articles }: HomeViewProps) => {
  return <HomeView articles={articles} />;
};

export default HomePage;
