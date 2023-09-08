import { Modal } from '@system/figa-ui';
import { type ScrollState, useScroll } from '@system/figa-hooks';
import { useCallback } from 'react';
import type { ArticleDto } from '@system/blog-api-models';
import { articles_actions } from '../../store/articles';
import { ArticlePreview } from './article-preview';
import {
  article_management_actions,
  useArticleManagementStore,
} from '../../store/article-management';
import { ArticlesGrid, type OnGoToClick } from '../../components/articles-grid';

interface ArticlesSectionProps {
  articles: ArticleDto[];
}

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  const articleManagementStore = useArticleManagementStore();

  const handleLoadMore = useCallback((scroll: ScrollState): void => {
    if (scroll.is === 'progress' && scroll.value >= 80) {
      articles_actions.loadMore();
    }
  }, []);

  const handleGoToClick: OnGoToClick = useCallback(
    (e) => {
      const articleId = e.currentTarget.getAttribute('data-article-id');

      if (!articleId) throw Error('Cannot find article id');

      const article = articles.find(({ id }) => id === articleId);

      if (!article) throw Error('Cannot find article');

      article_management_actions.start(article.id, article.url, article.lang);
    },
    [articles]
  );

  useScroll({
    onScroll: handleLoadMore,
  });

  return (
    <>
      <ArticlesGrid articles={articles} onGoToClick={handleGoToClick} />
      {articleManagementStore.is === 'active' && (
        <Modal onClose={article_management_actions.reset} minWidth="96vw">
          <ArticlePreview />
        </Modal>
      )}
    </>
  );
};

export { ArticlesSection };
