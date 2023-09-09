import Image from 'next/image';
import type { ArticleStatusColorsMap, ArticleThumbnailProps } from './defs';
import styled from 'styled-components';
import { SM_DOWN, T_DOWN, tokens } from '@system/figa-ui';

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

const map: ArticleStatusColorsMap = {
  Accepted: tokens.secondary[50],
  WaitingForApproval: tokens.secondary[50],
  Draft: tokens.gray[150],
  NeedWork: tokens.secondary[50],
};

const ArticleThumbnail = ({ src, title, status }: ArticleThumbnailProps) => {
  return (
    <Container style={{ borderColor: map[status] }}>
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
