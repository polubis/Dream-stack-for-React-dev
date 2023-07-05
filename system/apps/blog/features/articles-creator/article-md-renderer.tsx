import { ArticleLayout } from '@system/figa-ui';
import type { ArticleMdRendererProps, Components } from './defs';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

const createOverrides = (components: Components): MarkdownToJSX.Overrides => {
  const overrides: MarkdownToJSX.Overrides = {};

  for (const key in components) {
    overrides[key] = {
      component: components[key as keyof JSX.IntrinsicElements],
    };
  }

  return overrides;
};

const ArticleMdRenderer = ({ code, components }: ArticleMdRendererProps) => {
  const overrides = createOverrides(components);

  return (
    <ArticleLayout>
      <Markdown
        key={code}
        options={{
          overrides,
        }}
      >
        {code}
      </Markdown>
    </ArticleLayout>
  );
};

export { ArticleMdRenderer };
