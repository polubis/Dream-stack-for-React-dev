import type { Components } from '@mdx-js/react/lib';

interface ClientRendererProps {
  code: string;
  components: Components;
}

interface ArticlesCreatorProps extends ClientRendererProps {
  onChange: (code: string) => void;
}

export type { ClientRendererProps, ArticlesCreatorProps, Components };
