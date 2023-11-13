import type { GetStaticProps } from 'next';
import { HomeView, type HomeViewProps } from '../views/home';
import { getArticles } from '@system/blog-api';
import { UserContextProvider } from '../store/fallbackContext/context';

export const getStaticProps: GetStaticProps<HomeViewProps> = async () => {
  const response = await getArticles({
    lang: 'en',
    CurrentPage: 1,
    ItemsPerPage: 20,
    Status: 'Accepted',
    Search: '',
    Tags: [],
  });

  return {
    props: {
      articles: response.data,
    },
  };
};

const HomePage = ({ articles }: HomeViewProps) => {
  return (
    <UserContextProvider>
      <HomeView articles={articles} />
    </UserContextProvider>
  );
};

export default HomePage;
