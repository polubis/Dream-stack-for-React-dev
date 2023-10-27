import styled from 'styled-components';
import type { CreatorLayoutProps } from './defs';
import { T_DOWN, isTDown, row, tokens } from '@system/figa-ui';
import { useElementSize } from '@system/figa-hooks';
import { useEffect, useState } from 'react';
import c from 'classnames';

const topbarHeight = tokens.spacing[850];
const footerHeight = tokens.spacing[850];

const Container = styled.main`
  display: grid;
  grid-template-rows: ${topbarHeight} 1fr ${footerHeight};

  &.preview-hidden .creator-layout-preview {
    display: none;
  }

  .creator-layout-topbar,
  .creator-layout-footer {
    ${row()}
    padding: ${tokens.spacing[200]};
  }

  .creator-layout-content {
    display: grid;
    grid-template-columns: 50% 50%;
    border-top: ${tokens.spacing[25]} solid
      ${(props) => props.theme.nav.borderColor};
    border-bottom: ${tokens.spacing[25]} solid
      ${(props) => props.theme.nav.borderColor};

    @media ${T_DOWN} {
      grid-template-columns: 1fr;
    }

    .creator-layout-code,
    .creator-layout-preview {
      overflow-y: auto;
      height: calc(
        100vh -
          (
            ${topbarHeight} + ${footerHeight} + ${tokens.spacing[25]} +
              ${tokens.spacing[25]}
          )
      );
    }
  }
`;

const CreatorLayout = ({ children }: CreatorLayoutProps) => {
  const [previewHidden, setPreviewHidden] = useState(false);
  const [size] = useElementSize({ delay: 20 });
  const [Topbar, Code, Preview, Footer] = children;

  useEffect(() => {
    if (size.status === 'undetected') return;

    setPreviewHidden(isTDown(size.width));
  }, [size]);

  return (
    <Container
      className={c('creator-layout', { 'preview-hidden': previewHidden })}
    >
      <header className="creator-layout-topbar">{Topbar}</header>
      <main className="creator-layout-content">
        <section className="creator-layout-code">{Code}</section>
        <section className="creator-layout-preview">{Preview}</section>
      </main>
      <footer className="creator-layout-footer">{Footer}</footer>
    </Container>
  );
};

export { CreatorLayout };
