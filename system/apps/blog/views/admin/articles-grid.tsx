import {
  L_DOWN,
  M_DOWN,
  Modal,
  SM_DOWN,
  T_DOWN,
  tokens,
} from '@system/figa-ui';
import styled from 'styled-components';
import { type ScrollState, useScroll } from '@system/figa-hooks';
import { useCallback } from 'react';
import type { ArticleDto } from '@system/blog-api-models';
import { articles_actions } from '../../store/articles';
import { ArticleTile, type OnGoToClick } from './components';
import { ArticlePreview } from './article-preview';
import {
  article_management_actions,
  useArticleManagementStore,
} from '../../store/article-management';

const tile_width = 300;

const Container = styled.div`
  display: grid;
  justify-content: center;
  gap: ${tokens.spacing[250]};
  grid-template-columns: repeat(4, minmax(auto, ${tile_width}px));

  @media ${L_DOWN} {
    grid-template-columns: repeat(3, minmax(auto, ${tile_width}px));
  }

  @media ${T_DOWN} {
    grid-template-columns: repeat(2, minmax(auto, ${tile_width}px));
  }

  @media ${M_DOWN} {
    grid-template-columns: repeat(1, minmax(auto, ${tile_width}px));
  }

  @media ${SM_DOWN} {
    grid-template-columns: 100%;
  }
`;

const stack = ['React', 'Angular', 'NX', 'TypeScript', 'JavaScript', 'NodeJS'];
const tags = ['Programming', 'Development', 'Patterns'];

interface ArticlesGridProps {
  articles: ArticleDto[];
}

const ArticlesGrid = ({ articles }: ArticlesGridProps) => {
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
    <Container>
      {articles.map(({ id, title, description, thumbnailUrl, authorName }) => (
        <ArticleTile
          key={id}
          id={id}
          title={title}
          description={description}
          thumbnail={thumbnailUrl}
          author={authorName}
          stack={stack}
          tags={tags}
          width={tile_width}
          onGoToClick={handleGoToClick}
        />
      ))}
      {articleManagementStore.is === 'active' && (
        <Modal onClose={article_management_actions.reset} minWidth="96vw">
          <ArticlePreview />
        </Modal>
      )}
    </Container>
  );
};

export { ArticlesGrid };
