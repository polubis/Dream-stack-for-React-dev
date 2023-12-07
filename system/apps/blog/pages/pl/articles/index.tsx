import type { ArticlesPageProps } from '../../../models';
import type { GetStaticProps } from 'next';
import { ArticlesView } from '../../../views/articles/articles.view';
import { getArticles } from '@system/blog-api';
import type { ArticlesStore } from '../../../store-factories/articles';

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  const params: ArticlesStore.Params = {
    CurrentPage: 1,
    ItemsPerPage: 20,
    Status: 'Accepted',
    lang: 'pl',
    Search: '',
    Tags: [],
    yours: false,
  };

  return {
    props: {
      response: await getArticles(params),
      params,
    },
  };
};

const ArticlesPage = ({ response, params }: ArticlesPageProps) => {
  return <ArticlesView response={response} params={params} />;
};

export default ArticlesPage;
