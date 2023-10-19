import type { ArticlesPageProps } from '../../../models';
import type { GetStaticProps } from 'next';
import { LiveArticlesView } from '../../../views/live-articles/live-articles.view';
import { getArticles } from '@system/blog-api';
import { LiveArticlesStore } from '../../../store/live-articles';

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  const params: LiveArticlesStore.Params = {
    CurrentPage: 1,
    ItemsPerPage: 20,
    Status: 'Accepted',
    lang: 'pl',
    Search: '',
    Tags: [],
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
