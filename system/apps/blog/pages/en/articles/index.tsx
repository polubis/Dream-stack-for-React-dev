import type { ArticlesPageProps } from '../../../models';
import type { GetStaticProps } from 'next';
import { LiveArticlesView } from 'apps/blog/views/live-articles/live-articles.view';
import { getArticles } from '@system/blog-api';
import { GetArticlesParams } from '@system/blog-api-models';

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  const params: GetArticlesParams = {
    CurrentPage: 1,
    ItemsPerPage: 20,
    Status: 'Accepted',
    lang: 'en',
    Search: '',
  };

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
