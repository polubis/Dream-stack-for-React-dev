import type { CodeProps } from './defs';

import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { useLayoutEffect, useRef } from 'react';
import { DEFAULT_THEME } from './consts';

const Code = ({ children }: CodeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const parent = ref.current;

    if (!parent) {
      throw Error('There is no parent for code component');
    }

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

  return <div ref={ref} />;
};

export { Code };
