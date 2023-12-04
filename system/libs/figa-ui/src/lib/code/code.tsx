import type { CodeProps } from './defs';

import { useRef } from 'react';
import { CODE_LINE_HEIGHT } from './consts';
import c from 'classnames';
import { setup } from './setup';
import { useIsomorphicLayoutEffect } from '@system/figa-hooks';
import type { EditorView } from 'codemirror';
import { tokens, useThemeProvider } from '../theme-provider';
import { isServer } from '@system/utils';
import styled from 'styled-components';
import { center } from '../shared';

const Container = styled.div`
  .cm-editor {
    background: ${(props) => props.theme.code.bg};

    &.cm-focused {
      outline: none;
    }

    .cm-scroller {
      font-size: 1.6rem;
    }

    .cm-cursor,
    .cm-dropCursor {
      border-left-color: ${(props) => props.theme.font.default.color};
    }

    *[title='Fold line'],
    *[title='Unfold line'] {
      ${center()}
      width: ${tokens.spacing[300]};
    }

    .cm-gutters {
      background: ${(props) => props.theme.code.gutters};
      color: ${(props) => props.theme.font.default.color};
      border: none;
    }

    .cm-activeLineGutter {
      background: ${(props) => props.theme.code.selectionBg};
    }

    .cm-foldPlaceholder {
      background: ${(props) => props.theme.code.foldPlaceholder};
      border-color: ${(props) => props.theme.code.foldPlaceholder};
    }

    .cm-selectionBackground {
      background: transparent;
    }

    &.cm-focused .cm-selectionBackground {
      background: ${(props) => props.theme.code.selectionBg} !important;
    }
  }
`;

const CodeContent = ({
  children,
  className,
  readonly = false,
  wrapLines = false,
  lang = 'js',
  onChange,
}: CodeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useThemeProvider();

  useIsomorphicLayoutEffect(() => {
    const parent = ref.current;

    if (!parent) return;

    let view: EditorView | undefined;

    (async () => {
      view = await setup({
        children,
        readonly,
        lang,
        parent,
        wrapLines,
        theme: theme.theme.code,
        onChange,
      });
    })();

    return () => {
      view?.destroy();
    };
  }, [wrapLines, readonly, lang, theme.key]);

  return <Container className={c('code', className)} ref={ref} />;
};

const Code = ({ children, className, readonly, lang, onChange }: CodeProps) => {
  if (isServer()) {
    return (
      <Container
        className={c('code', className)}
        style={{ height: children.split('\n').length * CODE_LINE_HEIGHT }}
      />
    );
  }

  return (
    <CodeContent
      children={children}
      lang={lang}
      className={className}
      readonly={readonly}
      onChange={onChange}
    />
  );
};

export { Code };
