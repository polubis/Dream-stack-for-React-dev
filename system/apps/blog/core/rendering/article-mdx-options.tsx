import type { MarkdownToJSX } from 'markdown-to-jsx';
import { ARTICLE_COMPONENTS } from './article-components';

const createAricleOverrides = (): MarkdownToJSX.Overrides => {
  const overrides: MarkdownToJSX.Overrides = {};

  for (const key in ARTICLE_COMPONENTS) {
    overrides[key] = {
      component: ARTICLE_COMPONENTS[key as keyof JSX.IntrinsicElements],
    };
  }

  return overrides;
};

const article_mdx_options: { overrides: MarkdownToJSX.Overrides } = {
  overrides: createAricleOverrides(),
};

export { article_mdx_options };
