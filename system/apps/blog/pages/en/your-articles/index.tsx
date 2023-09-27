import type { GetStaticProps } from 'next';
import { YourArticlesView } from '../../../views/your-artcles';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const YourArticlesPage = () => {
  return <YourArticlesView />;
};

export default YourArticlesPage;
