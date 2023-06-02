import type { CodeProps } from './defs';

import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { useLayoutEffect, useRef } from 'react';
import { CODE_LINE_HEIGHT, DEFAULT_THEME } from './consts';
import c from 'classnames';

const CodeContent = ({ children, className }: CodeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const parent = ref.current;

    if (!parent) return;

    const view = new EditorView({
      doc: children,
      extensions: [basicSetup, javascript(), DEFAULT_THEME],
      parent,
    });

    return () => {
      view.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={c('code', className)} ref={ref} />;
};

const Code = ({ children, className }: CodeProps) => {
  if (typeof children !== 'string') {
    throw Error('Children must be a string');
  }

  if (typeof window === 'undefined') {
    return (
      <div
        className={c('code', className)}
        style={{ height: children.split('\n').length * CODE_LINE_HEIGHT }}
      />
    );
  }

  return <CodeContent children={children} className={className} />;
};

export { Code };
