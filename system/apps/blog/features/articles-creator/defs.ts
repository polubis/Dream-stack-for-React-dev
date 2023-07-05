import type { Components } from '@mdx-js/react/lib';

interface ArticleMdRendererProps {
  code: string;
  components: Components;
}

interface ArticlesCreatorProps extends ArticleMdRendererProps {
  onChange: (code: string) => void;
}

export type { ArticleMdRendererProps, ArticlesCreatorProps, Components };
