import type { ArticlesPageProps } from '../../../models';
import type { GetStaticProps } from 'next';
import { LiveArticlesView } from '../../../views/live-articles/live-articles.view';
import { getArticles } from '@system/blog-api';
import { articles_factories } from '../../../store/articles';

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  const params = articles_factories.defaultFilters('pl', false);

  return {
    props: {
      response: await getArticles(params),
      params,
    },
  };
};

const ArticlesPage = ({ response, params }: ArticlesPageProps) => {
  return <LiveArticlesView response={response} params={params} />;
};

export default ArticlesPage;
