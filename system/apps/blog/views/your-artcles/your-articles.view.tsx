import { useCallback } from 'react';
import type { YourArticlesViewProps } from './defs';

import { LeftBar, MainLayout } from '../../components';
import { ArticlesGrid, type OnGoToClick } from '../../components/articles-grid';
import { useRouter } from 'next/navigation';
import { useLang } from '../../dk';

const YourArticlesView = ({ articles }: YourArticlesViewProps) => {
  const lang = useLang();
  const router = useRouter();
  // @TODO: Prepare an endpoint and use it here for loading only your articles.

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const articleId = e.currentTarget.getAttribute('data-article-id');

      if (!articleId) throw Error('Cannot find article id');

      const article = articles.find(({ id }) => id === articleId);

      if (!article) throw Error('Cannot find article');

      router.push(`/${lang}/articles/${article.url}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [articles]
  );

  return (
    <>
      <MainLayout>
        <ArticlesGrid articles={articles} onGoToClick={handleGoToClick} />
      </MainLayout>
      <LeftBar />
    </>
  );
};

export { YourArticlesView };
