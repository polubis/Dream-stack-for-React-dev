import type { GetStaticProps, GetStaticPaths } from 'next';
import type { ArticlePageParams, ArticlePageProps } from '../../../models';

import { createArticlePath, getArticlesIds } from '../../../utils';
import { readFileSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { PageWrapper } from '../../../components';
import { MDXRemote } from 'next-mdx-remote';
import { lang } from '../../../constants';

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await getArticlesIds(lang.en);

  return {
    paths: ids.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params,
}: ArticlePageParams) => {
  const filePath = createArticlePath(lang.en, params.id + '.mdx');
  const source = await serialize(readFileSync(filePath, 'utf8'));

  return {
    props: {
      id: params.id,
      source,
    },
  };
};

const ArticlePage = (props: ArticlePageProps) => {
  return (
    <PageWrapper>
      <MDXRemote {...props.source} />
    </PageWrapper>
  );
};

export default ArticlePage;
