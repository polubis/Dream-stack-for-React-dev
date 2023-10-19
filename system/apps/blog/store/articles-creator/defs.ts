/* eslint-disable @typescript-eslint/no-namespace */
import type {
  ArticleTag,
  ArticleTags,
  CreateArticlePayload,
  ResponseError,
} from '@system/blog-api-models';
import type { FormState } from '@system/utils';

namespace ArticlesCreator {
  export interface TagFormData {
    tag: ArticleTag;
    tags: ArticleTags;
  }
  export type FormData = Omit<CreateArticlePayload, 'thumbnail'> & {
    thumbnail: {
      file: File | null;
      preview: string[];
    };
    sendToReview: boolean;
  };
  export type FormDataState = FormState<FormData>;
  export type View = 'initial' | 'creator' | 'confirm';
  export type Idle = { is: 'idle'; form: FormDataState; view: View };
  export type Busy = { is: 'busy'; form: FormDataState; view: View };
  export type Ok = { is: 'ok'; form: FormDataState; view: View };
  export type Fail = {
    is: 'fail';
    form: FormDataState;
    error: ResponseError;
    view: View;
  };

  export type State = Idle | Busy | Ok | Fail;
}

export type { ArticlesCreator };
