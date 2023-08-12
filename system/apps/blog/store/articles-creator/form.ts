import { form, required } from '@system/utils';
import type { ArticlesCreator } from './defs';
import type { Lang } from '@system/blog-api-models';

const creatorForm = form<ArticlesCreator.FormData>()({
  title: [required],
  description: [],
  content: [],
  lang: [],
  thumbnail: [],
});

const initForm = (
  lang: Lang,
  data: Partial<ArticlesCreator.FormData> = {}
): ArticlesCreator.FormDataState =>
  creatorForm.init({
    title: '',
    description: '',
    thumbnail: {
      file: null,
      preview: '',
    },
    content: '',
    lang,
    ...data,
  });

export { creatorForm, initForm };
