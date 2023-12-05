/* eslint-disable @typescript-eslint/no-namespace */
import type {
  ArticleTag,
  ArticleTags,
  CreateArticlePayload,
  Id,
  ResponseError,
  Url,
} from '@system/blog-api-models';
import type { FormState } from '@system/utils';

namespace ArticlesCreatorStore {
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
  export type Ok = {
    is: 'ok';
    form: FormDataState;
    view: View;
    data: { id: Id; url: Url };
  };
  export type Fail = {
    is: 'fail';
    form: FormDataState;
    error: ResponseError;
    view: View;
  };

  export type State = Idle | Busy | Ok | Fail;

  export interface Actions {
    reset(): void;
    setView(view: View): void;
    setForm(values?: Partial<FormData>): void;
    change<K extends keyof FormData, V extends FormData[K]>(
      key: K,
      value: V
    ): void;
    confirm(url?: Url): Promise<void>;
  }

  export interface States {
    idle(): Idle;
  }
}

export type { ArticlesCreatorStore };
