import type { Lang } from '@system/blog-api-models';
import { readdir } from 'fs';
import path from 'path';

export const createArticlePath = (lang: Lang, ...rest: string[]): string =>
  path.join(
    process.cwd(),
    'apps',
    'blog',
    'content',
    lang,
    'articles',
    ...rest
  );

export const getArticlesIds = (lang: Lang): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const dirPath = createArticlePath(lang);

    readdir(dirPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        reject(err);
      }

      resolve(
        files
          .filter((file) => file.isFile())
          .map((file) => file.name.replace('.mdx', ''))
      );
    });
  });
};
