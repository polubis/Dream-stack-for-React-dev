import type { GetStaticProps } from 'next';
import type { ArticlesStore } from './defs';
import { getArticles } from '@articles.service';
import { ArticlesView } from './articles.view';
import { articles_store_actions } from './articles.store.actions';

interface ArticlesPageProps {
  articles: ArticlesStore.ArticlesCollection;
}

export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
};

// Option 1.
const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  useEffect(() => {
    articles_store_actions.init(articles); // Somehow pass articles to store.
  }, []);

  return <ArticlesView />;
};

// Option 2.
const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  // Pass properties to component and add checks - if it's passed
  // then render articles and then sync them with "Zustand" store.
  return <ArticlesView articles={articles} />;
};

// Option 3
// We'll check it for sec 💘.
