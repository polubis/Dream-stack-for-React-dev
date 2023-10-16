import {
  ArrowTopIcon,
  Badge,
  Button,
  Font,
  SM_DOWN,
  SwapIcon,
  clamp,
  column,
  row,
  slideIn,
  spacing,
  tokens,
  trim,
  wrap,
} from '@system/figa-ui';
import styled from 'styled-components';
import Image from 'next/image';
import { useToggle } from '@system/figa-hooks';
import { useMemo } from 'react';
import type { ArticleTileProps } from './defs';
import { ArticleStatusBadge } from '../article-status-badge';

const avatar_size = {
  height: spacing.parse(400),
  width: spacing.parse(400),
};

const Container = styled.div`
  background: 1px solid ${(props) => props.theme.box.outlined.bg};
  overflow: hidden;

  .article-tile-flipped-container {
    ${column()}
    ${slideIn('-' + tokens.spacing[150], '0px')}
        padding: ${tokens.spacing[200]};
    height: 100%;

    .detail {
      ${column()}
      margin-bottom: ${tokens.spacing[150]};

      & > .b3 {
        margin-top: ${tokens.spacing[50]};
      }

      .article-tile-stats {
        ${wrap()}

        & > * {
          margin: ${tokens.spacing[100]} ${tokens.spacing[100]} 0 0;
        }
      }
    }

    .article-tile-content-footer {
      ${row()}
      justify-content: flex-end;
      margin-top: auto;

      & > * {
        margin-left: ${tokens.spacing[150]};
      }
    }
  }

  .article-tile-container {
    ${column()}
    height: 100%;
    ${slideIn('-' + tokens.spacing[200], '0px')}

    .article-tile-image {
      position: relative;
      height: ${tokens.spacing[1750]};
      flex-shrink: 0;

      img {
        border-radius: ${tokens.radius[25]};
      }

      .article-tile-badges {
        ${row()}
        position: absolute;
        top: ${tokens.spacing[150]};
        right: ${tokens.spacing[150]};

        & > * {
          margin-left: ${tokens.spacing[100]};
        }
      }
    }

    .article-tile-content {
      ${column()}
      padding: ${tokens.spacing[200]};
      height: 100%;

      & > .h6 {
        margin: ${tokens.spacing[100]} 0 ${tokens.spacing[150]} 0;
        ${clamp(2)}
      }

      & > .b3 {
        ${trim()}
      }

      & > .b2 {
        ${clamp(3)}
        margin-bottom: ${tokens.spacing[200]};
      }

      .article-tile-content-footer {
        ${row()}
        margin-top: auto;

        .article-tile-content-user {
          cursor: pointer;
          ${row()}

          img {
            border-radius: ${tokens.radius[1000]};
          }

          .b2 {
            ${trim()}
            margin-left: ${tokens.spacing[150]};
            max-width: ${tokens.spacing[1000]};
          }
        }

        .article-flip-btn {
          margin: 0 ${tokens.spacing[150]} 0 auto;
        }
      }
    }
  }
`;

const ArticleTile = ({
  id,
  title,
  thumbnail,
  description,
  author,
  tags,
  status,
  width,
  onGoToClick,
}: ArticleTileProps) => {
  const toggler = useToggle();

  const { tagsAsString } = useMemo(
    () => ({
      tagsAsString: tags.join(', '),
    }),
    [tags]
  );

  return (
    <Container className="article-tile">
      {toggler.opened ? (
        <div className="article-tile-flipped-container">
          <div className="detail">
            <Font variant="b1">Tags ({tags.length})</Font>
            <Font variant="b3">{tagsAsString}</Font>
          </div>
          <div className="detail">
            <Font variant="b1">Added / Updated</Font>
            <Font variant="b3">12 days ago / 20 days ago</Font>
          </div>
          <div className="detail">
            <Font variant="b1">Stats & Achievements</Font>
            <div className="article-tile-stats">
              <Badge variant="outlined" motive="secondary">
                10 comments
              </Badge>
              <Badge variant="outlined" motive="secondary">
                120 views
              </Badge>
              <Badge variant="outlined" motive="secondary">
                3 achievements
              </Badge>
              <Badge variant="outlined" motive="secondary">
                3 in rank
              </Badge>
            </div>
          </div>
          <div className="article-tile-content-footer">
            <Button
              className="article-flip-btn"
              variant="outlined"
              shape="rounded"
              size={1}
              onClick={toggler.close}
            >
              <SwapIcon className="r-90" />
            </Button>
            <Button
              variant="outlined"
              shape="rounded"
              data-article-id={id}
              size={1}
              title="Read article"
              onClick={onGoToClick}
            >
              <ArrowTopIcon className="r-90" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="article-tile-container">
          <div className="article-tile-image">
            <Image
              fill
              sizes={`${SM_DOWN} 100%, ${width}px`}
              src={thumbnail}
              loading="lazy"
              alt={`${title} thumbnail`}
            />
            <div className="article-tile-badges">
              <ArticleStatusBadge status={status} />
            </div>
          </div>

          <div className="article-tile-content">
            <Font variant="h6" title={title}>
              {title}
            </Font>
            <Font variant="b2" italic title={description}>
              {description}
            </Font>
            <div className="article-tile-content-footer">
              <div className="article-tile-content-user" title={author}>
                <Image
                  loading="lazy"
                  alt={author}
                  src={thumbnail}
                  {...avatar_size}
                />
                <Font variant="b2" title={author}>
                  {author}
                </Font>
              </div>
              <Button
                className="article-flip-btn"
                variant="outlined"
                shape="rounded"
                title="Show details"
                size={1}
                onClick={toggler.open}
              >
                <SwapIcon />
              </Button>
              <Button
                variant="outlined"
                shape="rounded"
                data-article-id={id}
                size={1}
                title="Read article"
                onClick={onGoToClick}
              >
                <ArrowTopIcon className="r-90" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export { ArticleTile };
