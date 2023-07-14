import type { ArticlesViewProps } from './defs';

import { LeftBar, MainLayout } from '../../components';
import {
  ArrowTopIcon,
  Avatar,
  Box,
  Button,
  Font,
  M_UP,
  Popover,
  TileFlipIcon,
  tokens,
} from '@system/figa-ui';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  .articles-grid {
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    margin: 0 auto;
    max-width: ${tokens.width[50]};

    .article-tile {
      max-width: 340px;
      margin: 0 0 ${tokens.spacing[200]} 0;

      @media ${M_UP} {
        margin: 0 ${tokens.spacing[350]} ${tokens.spacing[200]} 0;
      }

      &-thumbnail {
        height: 140px;
        position: relative;
      }

      &-content {
        padding: ${tokens.spacing[200]} ${tokens.spacing[50]};
      }

      &-title {
        margin: ${tokens.spacing[100]} 0 ${tokens.spacing[100]} 0;
      }

      &-img {
        border-radius: ${tokens.radius[50]};
      }
    }
  }
`;

const ArticlesView = ({ articles }: ArticlesViewProps) => {
  return (
    <>
      <MainLayout>
        <Container>
          <div className="articles-grid">
            {[...articles, ...articles].map((article, idx) => (
              <div className="article-tile" key={article.id}>
                <div className="article-tile-thumbnail">
                  <Image
                    className="article-tile-img"
                    fill
                    src={article.thumbnailUrl}
                    alt={`${article.title} thumbnail`}
                  />
                </div>
                <div className="article-tile-content">
                  <Font variant="b3" italic>
                    18 Jan 2022 / updated 2 days ago
                  </Font>

                  <Font
                    motive="primary"
                    className="article-tile-title"
                    variant="h6"
                  >
                    {article.title}
                  </Font>

                  <Font variant="b2">{article.description}</Font>

                  <Popover
                    trigger={({ toggle }) => (
                      <Box orientation="row" between margin={[250, 0, 300, 0]}>
                        <Box orientation="row" spacing={[150]}>
                          <Button shape="rounded">
                            <Avatar
                              alt={article.authorName}
                              src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg"
                              onClick={toggle}
                            />
                          </Button>
                          <Font variant="b2">{article.authorName}</Font>
                        </Box>

                        <Box orientation="row" spacing={[150]} right>
                          {idx === 0 && (
                            <Font italic variant="b2">
                              New
                            </Font>
                          )}
                          <Font variant="b3" italic>
                            Read time: 5m
                          </Font>
                        </Box>
                      </Box>
                    )}
                  >
                    {({ close }) => (
                      <Box
                        spacing={[200, 400, 400]}
                        padding={[250, 250, 250, 250]}
                        variant="outlined"
                        minWidth="280px"
                        maxWidth="420px"
                        onClick={close}
                      >
                        <Font variant="h5">User stats will be here</Font>
                      </Box>
                    )}
                  </Popover>

                  <Box orientation="row" right spacing={[150]}>
                    <Button size={1} shape="rounded">
                      <TileFlipIcon />
                    </Button>
                    <Button size={1} shape="rounded">
                      <ArrowTopIcon className="r-90" />
                    </Button>
                  </Box>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </MainLayout>
      <LeftBar />
    </>
  );
};

export { ArticlesView };
