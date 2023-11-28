import type { CodeProps } from './defs';

import { useRef } from 'react';
import { CODE_LINE_HEIGHT } from './consts';
import c from 'classnames';
import { setup } from './setup';
import { useIsomorphicLayoutEffect } from '@system/figa-hooks';
import type { EditorView } from 'codemirror';

const CodeContent = ({
  children,
  className,
  readonly = false,
  wrapLines = false,
  lang = 'js',
  onChange,
}: CodeProps) => {
  const ref = useRef<HTMLDivElement>(null);

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
        onChange,
      });
    })();

    return () => {
      view?.destroy();
    };
  }, [wrapLines, readonly, lang]);

  return <div className={c('code', className)} ref={ref} />;
};

const Code = ({ children, className, readonly, onChange }: CodeProps) => {
  if (typeof window === 'undefined') {
    return (
      <div
        className={c('code', className)}
        style={{ height: children.split('\n').length * CODE_LINE_HEIGHT }}
      />
    );
  }

  return (
    <CodeContent
      children={children}
      className={className}
      readonly={readonly}
      onChange={onChange}
    />
  );
};

export { Code };
