import { server_props_getters } from '../../../server';
import type { ArticlesPageProps } from '../../../models';
import { ArticlesView } from '../../../views/articles';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  return await server_props_getters.getArticles('pl', 'Accepted');
};

const ArticlesPage = ({ state }: ArticlesPageProps) => {
  return <ArticlesView state={state} />;
};

export default ArticlesPage;
