import Image from 'next/image';
import { useMemo } from 'react';
import type { ArticleStatusColorsMap, ArticleThumbnailProps } from './defs';
import styled from 'styled-components';
import { SM_DOWN, T_DOWN, tokens, useThemeProvider } from '@system/figa-ui';

const Container = styled.div`
  position: relative;
  aspect-ratio: 62/20;
  border-top: ${tokens.spacing[100]} solid transparent;
  border-bottom: ${tokens.spacing[100]} solid transparent;
  border-radius: ${tokens.spacing[50]};

  img {
    object-fit: cover;
  }
`;

const ArticleThumbnail = ({ src, title, status }: ArticleThumbnailProps) => {
  const { theme } = useThemeProvider();

  const map: ArticleStatusColorsMap = useMemo(
    () => ({
      Accepted: theme.badge.filled.ok.bg,
      WaitingForApproval: theme.badge.filled.secondary.bg,
      Draft: theme.badge.filled.casual.bg,
      NeedWork: theme.badge.filled.primary.bg,
    }),
    [theme]
  );

  return (
    <Container
      className="article-thumbnail"
      style={{ borderColor: map[status] }}
    >
      <Image
        fill
        priority
        src={src}
        title={title}
        alt={title}
        sizes={`${SM_DOWN} 100%, ${T_DOWN}800px, 1080px`}
      />
    </Container>
  );
};

export { ArticleThumbnail };
