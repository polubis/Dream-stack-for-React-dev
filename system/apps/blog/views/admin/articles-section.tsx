import { type ScrollState, useScroll } from '@system/figa-hooks';
import { useCallback } from 'react';
import type { ArticleDto } from '@system/blog-api-models';
import { articles_actions } from '../../store/articles';
import { ArticlesGrid, type OnGoToClick } from '../../components/articles-grid';
import { useRouter } from 'next/router';

interface ArticlesSectionProps {
  articles: ArticleDto[];
}

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  const router = useRouter();

  const handleLoadMore = useCallback((scroll: ScrollState): void => {
    if (scroll.is === 'progress' && scroll.value >= 80) {
      articles_actions.loadMore();
    }
  }, []);

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const id = e.currentTarget.getAttribute('data-article-id');

      if (!id) throw Error('Cannot find article id');

      const article = articles.find((article) => article.id === id);

      if (!article) throw Error('Cannot find article');

      router.push(
        `${router.asPath}/article-review?url=${article.url}&id=${id}`
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useScroll({
    onScroll: handleLoadMore,
  });

  return <ArticlesGrid articles={articles} onGoToClick={handleGoToClick} />;
};

export { ArticlesSection };
