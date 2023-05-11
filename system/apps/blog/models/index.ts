import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface ArticlePageProps {
  id: string;
  source: MDXRemoteSerializeResult;
}

interface ArticlePageParams {
  params: {
    id: string;
  };
}

type Lang = 'pl' | 'en';

export type { ArticlePageParams, ArticlePageProps, Lang };
