import styled, { css } from 'styled-components';
import type { CreatorLayoutProps } from './defs';
import { T_DOWN, tokens } from '../theme-provider';
import { appearIn, column, row } from '../shared';
import { useToggle } from '@system/figa-hooks';

const HEADER_HEIGHT = tokens.spacing[1000];
const TOOLBOX_WIDTH = tokens.spacing[700];

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
  max-height: calc(100vh - ${HEADER_HEIGHT});
  overflow-y: auto;
`;

const CodeWrapper = styled.div`
  ${content('code')}
`;

const PreviewWrapper = styled.div`
  ${content('preview')}
  padding: ${tokens.spacing[250]};
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
  padding: 0 ${tokens.spacing[250]};
  grid-area: nav;
  background: ${(props) => props.theme.creatorLayout.bg};
  border-bottom: 1px solid ${(props) => props.theme.creatorLayout.borderColor};
`;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr ${TOOLBOX_WIDTH} 1fr ${TOOLBOX_WIDTH};
  grid-template-rows: ${HEADER_HEIGHT} 1fr;
  grid-template-areas:
    'nav nav nav nav'
    'code codeToolbox preview previewToolbox';
  min-height: 100vh;

  @media ${T_DOWN} {
    grid-template-columns: 1fr ${TOOLBOX_WIDTH};
    grid-template-rows: ${HEADER_HEIGHT} 1fr;
    grid-template-areas:
      'nav nav'
      'content toolbox';

    ${CodeWrapper} {
      ${appearIn('0px', '0px')}
      grid-area: content;
    }

    ${CodeToolboxWrapper} {
      ${appearIn('0px', '0px')}
      grid-area: toolbox;
    }

    ${PreviewWrapper} {
      ${appearIn('0px', '0px')}
      grid-area: content;
    }

    ${PreviewToolboxWrapper} {
      ${appearIn('0px', '0px')}
      grid-area: toolbox;
    }
  }
`;

const CreatorLayout = ({
  className,
  children,
  previewToolbox,
  codeToolbox,
  ...props
}: CreatorLayoutProps) => {
  const preview = useToggle(true);
  const code = useToggle(true);
  const [Navigation, Code, Preview] = children;

  return (
    <Container className={className} {...(props as Record<string, unknown>)}>
      <NavigationWrapper>{Navigation}</NavigationWrapper>
      {code.isOpen && (
        <>
          <CodeWrapper>{Code}</CodeWrapper>
          <CodeToolboxWrapper>
            {codeToolbox({ code, preview })}
          </CodeToolboxWrapper>
        </>
      )}
      {preview.isOpen && (
        <>
          <PreviewWrapper>{Preview}</PreviewWrapper>
          <PreviewToolboxWrapper>
            {previewToolbox({ code, preview })}
          </PreviewToolboxWrapper>
        </>
      )}
    </Container>
  );
};

export { CreatorLayout };
