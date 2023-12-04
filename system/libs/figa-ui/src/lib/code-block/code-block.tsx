import c from 'classnames';
import type { CodeBlockProps } from './defs';
import styled from 'styled-components';
import { column, row, shape } from '../shared';
import { tokens } from '../theme-provider';

const Container = styled.div`
  ${column()}

  .code-block-header {
    ${row()}
    justify-content: space-between;
    padding: ${tokens.spacing[200]};
    background: ${(props) => props.theme.codeBlock.header.bg};
    border-top-right-radius: ${tokens.radius[50]};
    border-top-left-radius: ${tokens.radius[50]};

    .code-block-header-dots {
      ${row()}

      & > *:not(:last-child) {
        margin-right: ${tokens.spacing[150]};
      }

      & > * {
        ${shape(tokens.spacing[200], tokens.radius[1000])}

        &:first-of-type {
          background: ${(props) => props.theme.codeBlock.header.dots.first.bg};
        }

        &:nth-of-type(2) {
          background: ${(props) => props.theme.codeBlock.header.dots.second.bg};
        }

        &:last-of-type {
          background: ${(props) => props.theme.codeBlock.header.dots.third.bg};
        }
      }
    }
  }

  .code-block-content {
    padding: ${tokens.spacing[200]};
    background: ${(props) => props.theme.codeBlock.content.bg};
    border-bottom-right-radius: ${tokens.radius[50]};
    border-bottom-left-radius: ${tokens.radius[50]};
  }
`;

const Dots = (
  <div className="code-block-header-dots">
    <div />
    <div />
    <div />
  </div>
);

const CodeBlock = ({ className, header, children }: CodeBlockProps) => {
  return (
    <Container className={c('code-block', className)}>
      <div className="code-block-header">{header ? header(Dots) : Dots}</div>

      <div className="code-block-content">{children}</div>
    </Container>
  );
};

export { CodeBlock };
