import { type ScrollState, useScroll } from '@system/figa-hooks';
import { useCallback } from 'react';
import { articles_actions, articles_selectors } from '../../store/articles';
import { ArticlesGrid, type OnGoToClick } from '../articles-grid';
import { useRouter } from 'next/router';
import type { ArticlesSectionProps } from './defs';
import { useLang } from '../../dk';

const ArticlesSection = ({ articles, pathCreator }: ArticlesSectionProps) => {
  const router = useRouter();
  const lang = useLang();

  const handleLoadMore = useCallback((scroll: ScrollState): void => {
    if (scroll.is === 'progress' && scroll.value >= 50) {
      articles_actions.loadMore();
    }
  }, []);

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const id = e.currentTarget.getAttribute('data-article-id');

      if (!id) throw Error('Cannot find article id');

      const article = articles_selectors
        .articles()
        .find((article) => article.id === id);

      if (!article) throw Error('Cannot find article');

      router.push('/' + lang + '/' + pathCreator(router, article));
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
