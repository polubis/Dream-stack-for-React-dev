import type { CodeProps } from './defs';

import { useLayoutEffect, useRef } from 'react';
import { CODE_LINE_HEIGHT } from './consts';
import c from 'classnames';
import { setup } from './setup';

const CodeContent = ({
  children,
  className,
  readonly,
  onChange,
}: CodeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const parent = ref.current;

    if (!parent) return;

    const view = setup({ children, readonly, parent, onChange });

    return () => {
      view.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
