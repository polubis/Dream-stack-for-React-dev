/* eslint-disable @typescript-eslint/no-namespace */
import type { CreateArticlePayload } from '@system/blog-api-models';
import type { FormState } from '@system/utils';

namespace ArticlesCreator {
  export type FormData = Omit<CreateArticlePayload, 'thumbnail'> & {
    thumbnail: {
      file: File | null;
      preview: string;
    };
  };
  export type FormDataState = FormState<FormData>;

  export type State = {
    form: FormDataState;
  };
}

export type { ArticlesCreator };
