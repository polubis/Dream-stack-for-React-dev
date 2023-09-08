import { form, required } from '@system/utils';
import type { ArticlesCreator } from './defs';

const creatorForm = form<ArticlesCreator.FormData>()({
  title: [required],
  description: [required],
  content: [required],
  lang: [required],
});

export { creatorForm };
