import type { GetStaticProps } from 'next';
import { YourArticlesView } from '../../../views/your-articles';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const YourArticlesPage = () => {
  return <YourArticlesView />;
};

export default YourArticlesPage;
