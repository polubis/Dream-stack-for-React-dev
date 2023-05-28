import c from 'classnames';
import type { CodeBlockProps } from './defs';

const Dots = (
  <div className="code-block-header-dots">
    <div />
    <div />
    <div />
  </div>
);

const CodeBlock = ({ className, header, children }: CodeBlockProps) => {
  return (
    <div className={c('code-block', className)}>
      <div className="code-block-header">{header ? header(Dots) : Dots}</div>

      <div className="code-block-content">{children}</div>
    </div>
  );
};

export { CodeBlock };
