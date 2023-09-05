import { Button, Font, L_DOWN, M_DOWN, Modal, SM_DOWN, T_DOWN, tokens } from '@system/figa-ui';
import styled from 'styled-components';
import { type ScrollState, useScroll, useToggle } from '@system/figa-hooks';
import { useCallback } from 'react';
import type { ArticleDto } from '@system/blog-api-models';
import { articles_actions } from '../../store/articles';
import { ArticleTile, type GoToClickEvent } from './components/article-tile';

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
  const articleModal = useToggle<ArticleDto>()

  const handleLoadMore = useCallback((scroll: ScrollState): void => {
    if (scroll.is === 'progress' && scroll.value >= 80) {
      articles_actions.loadMore();
    }
  }, []);

  useScroll({
    onScroll: handleLoadMore,
  });

  const handleGoToArticle = (e: GoToClickEvent): void => {
    const id = e.currentTarget.getAttribute('data-article-id');

    if (!id) throw Error('Cannot find article id to navigate');

    const article = articles.find(article => article.id === id)

    if (!article) throw Error('Cannot find article by id ' + id)

    articleModal.openWithData(article)
  };

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
          onGoToClick={handleGoToArticle}
        />
      ))}
      {articleModal.opened &&
        <Modal onClose={articleModal.close}>
          {articleModal.data.status === 'WaitingForApproval' &&
            <>
              <Font variant='h5'>You&apos;re reviewing {articleModal.data.title} article</Font>
              <Button>
                Accept and publish
              </Button>
            </>
          }
        </Modal>
      }
    </Container>
  );
};

export { ArticlesGrid };
