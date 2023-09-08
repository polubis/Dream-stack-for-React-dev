import { useCallback } from 'react';
import type { ArticlesViewProps } from './defs';

import { LeftBar, MainLayout } from '../../components';
import { ArticlesGrid, type OnGoToClick } from '../../components/articles-grid';
import { type ScrollState, useScroll } from '@system/figa-hooks';
import { useRouter } from 'next/navigation';
import { useLang } from '../../dk';

const ArticlesView = ({ articles }: ArticlesViewProps) => {
  const lang = useLang();
  const router = useRouter();

  const handleLoadMore = useCallback((scroll: ScrollState): void => {
    if (scroll.is === 'progress' && scroll.value >= 80) {
      // articles_actions.loadMore();
    }
  }, []);

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

  useScroll({
    onScroll: handleLoadMore,
  });

  return (
    <>
      <MainLayout>
        <ArticlesGrid articles={articles} onGoToClick={handleGoToClick} />
      </MainLayout>
      <LeftBar />
    </>
  );
};

export { ArticlesView };
