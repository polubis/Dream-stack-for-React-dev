/* eslint-disable @typescript-eslint/no-namespace */
import type {
  CreateArticlePayload,
  FullArticleDto,
  ResponseError,
  Url,
} from '@system/blog-api-models';
import type { FormState } from '@system/utils';

type S<K, T = undefined> = T extends undefined ? { is: K } : { is: K } & T;

namespace ArticlesCreator {
  export type FormData = Omit<CreateArticlePayload, 'thumbnail'> & {
    thumbnail: {
      file: File | null;
      preview: string[];
    };
  };
  export type FormDataState = FormState<FormData>;

  export type Idle = S<'idle'>;
  export type Loading = S<'loading', { url: Url }>;
  export type LoadFail = S<'load-fail', { error: ResponseError }>;
  export type Creation = S<'creation', { form: FormState<FormData> }>;
  export type Creating = S<'creating', { form: FormState<FormData> }>;
  export type Created = S<'created', { form: FormState<FormData> }>;
  export type CreateFail = S<
    'create-fail',
    { form: FormState<FormData>; error: ResponseError }
  >;
  export type Edition = S<
    'edition',
    { form: FormState<FormData>; article: FullArticleDto; url: Url }
  >;
  export type Editing = S<
    'editing',
    { form: FormState<FormData>; article: FullArticleDto; url: Url }
  >;
  export type Edited = S<
    'edited',
    { form: FormState<FormData>; article: FullArticleDto; url: Url }
  >;
  export type EditFail = S<
    'edit-fail',
    {
      url: Url;
      form: FormState<FormData>;
      article: FullArticleDto;
      error: ResponseError;
    }
  >;
  export type SafeState =
    | Creation
    | Creating
    | Created
    | Edition
    | Editing
    | Edited;
  export type State =
    | Idle
    | CreateFail
    | Loading
    | LoadFail
    | EditFail
    | SafeState;
}

export type { ArticlesCreator };
