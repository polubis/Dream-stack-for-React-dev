import styled, { css } from 'styled-components';
import type {
  CreatorLayoutPayload,
  CreatorLayoutProps,
  CreatorLayoutView,
} from './defs';
import { T_DOWN, T_UP, isTDown, isTUp, tokens } from '../theme-provider';
import { slideIn, column, row } from '../shared';
import { useEffect, useState } from 'react';
import c from 'classnames';
import { useElementSize } from '@system/figa-hooks';

const header_height = tokens.spacing[1000];
const toolbox_width = tokens.spacing[700];

const toolbox = (area: string) => css`
  ${column()}
  align-items: center;
  grid-area: ${area};
  padding: ${tokens.spacing[200]} 0;

  & > *:not(:last-child) {
    margin-bottom: ${tokens.spacing[150]};
  }
`;

const content = (area: string) => css`
  grid-area: ${area};
  max-height: calc(100vh - ${header_height});
  overflow-y: auto;
`;

const CodeWrapper = styled.div`
  ${content('code')}
  position: relative;
`;

const PreviewWrapper = styled.div`
  ${content('preview')}
  padding: ${tokens.spacing[250]};
  position: relative;
`;

const CodeToolboxWrapper = styled.div`
  ${toolbox('codeToolbox')}
  border-right: 1px solid ${(props) => props.theme.creatorLayout.borderColor};
`;

const PreviewToolboxWrapper = styled.div`
  ${toolbox('previewToolbox')}
`;

const NavigationWrapper = styled.div`
  ${row()}
  padding: 0 ${tokens.spacing[150]} 0 ${tokens.spacing[200]};
  grid-area: nav;
  background: ${(props) => props.theme.creatorLayout.bg};
  border-bottom: 1px solid ${(props) => props.theme.creatorLayout.borderColor};

  & > * {
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr ${toolbox_width} 1fr ${toolbox_width};
  grid-template-rows: ${header_height} 1fr;
  grid-template-areas:
    'nav nav nav nav'
    'code codeToolbox preview previewToolbox';
  min-height: 100vh;

  @media ${T_UP} {
    &.code-full {
      grid-template-areas:
        'nav nav nav nav'
        'code code code codeToolbox';
    }

    &.preview-full {
      grid-template-areas:
        'nav nav nav nav'
        'preview preview preview previewToolbox';
    }
  }

  @media ${T_DOWN} {
    grid-template-columns: 1fr ${toolbox_width};
    grid-template-rows: ${header_height} 1fr;
    grid-template-areas:
      'nav nav'
      'content toolbox';

    ${CodeWrapper} {
      ${slideIn('0px', '0px')}
      grid-area: content;
    }

    ${CodeToolboxWrapper} {
      ${slideIn('0px', '0px')}
      grid-area: toolbox;
    }

    ${PreviewWrapper} {
      ${slideIn('0px', '0px')}
      grid-area: content;
    }

    ${PreviewToolboxWrapper} {
      ${slideIn('0px', '0px')}
      grid-area: toolbox;
    }
  }
`;

const CreatorLayout = ({
  className,
  children,
  previewToolbox,
  codeToolbox,
  navigation,
  ...props
}: CreatorLayoutProps) => {
  const [view, setView] = useState<CreatorLayoutView>('undetected');
  const { state: size } = useElementSize({ delay: 20 });

  const [Code, Preview] = children;

  const expandCode = (): void => {
    if (size.status !== 'detected') return;

    const { width } = size;

    if (isTDown(width)) {
      setView('code');
      return;
    }

    setView('code-full');
  };

  const expandPreview = (): void => {
    if (size.status !== 'detected') return;

    const { width } = size;

    if (isTDown(width)) {
      setView('preview');
      return;
    }

    setView('preview-full');
  };

  const expandBoth = (): void => {
    if (size.status !== 'detected') return;

    const { width } = size;

    if (!isTUp(width)) return;

    setView('both');
  };

  useEffect(() => {
    if (size.status !== 'detected') return;

    const { width } = size;

    if (isTDown(width)) {
      setView('code');
      return;
    }

    if (isTUp(width)) {
      setView('both');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const payload: CreatorLayoutPayload = {
    expandCode,
    expandPreview,
    expandBoth,
    view,
    size,
  };

  return (
    <Container
      className={c('creator-layout', view, className)}
      {...(props as Record<string, unknown>)}
    >
      <NavigationWrapper>{navigation(payload)}</NavigationWrapper>

      {view !== 'undetected' && (
        <>
          {(view === 'both' || view === 'code' || view === 'code-full') && (
            <>
              <CodeWrapper>{Code}</CodeWrapper>
              <CodeToolboxWrapper>{codeToolbox(payload)}</CodeToolboxWrapper>
            </>
          )}
          {(view === 'both' ||
            view === 'preview' ||
            view === 'preview-full') && (
            <>
              <PreviewWrapper>{Preview}</PreviewWrapper>
              <PreviewToolboxWrapper>
                {previewToolbox(payload)}
              </PreviewToolboxWrapper>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export { CreatorLayout };
