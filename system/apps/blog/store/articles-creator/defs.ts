import type {
  CreateArticlePayload,
  Lang,
  ResponseError,
} from '@system/blog-api';
import type { FilePickerPreviewList } from '@system/figa-ui';

interface ArticlesCreatorForm extends Omit<CreateArticlePayload, 'thumbnail'> {
  lang: Lang | null;
  thumbnail: {
    file: File;
    preview: FilePickerPreviewList;
  };
}

interface ArticlesCreatorActions {
  setField: <
    K extends keyof ArticlesCreatorForm,
    V extends ArticlesCreatorForm[K]
  >(
    key: K,
    value: V
  ) => void;
  load: (content: CreateArticlePayload['content']) => void;
  submit: () => Promise<void>;
}

interface ArticlesCreatorState
  extends ArticlesCreatorActions,
    ArticlesCreatorForm {
  key: 'idle' | 'loading' | 'loaded';
  submitKey: 'idle' | 'pending' | 'done' | 'error';
  submitResponse: ResponseError | null;
}

type ArticlesCreatorStore = ArticlesCreatorState & ArticlesCreatorActions;

type ArticlesCreatorStoreStateKey = ArticlesCreatorState['key'];

export type {
  ArticlesCreatorActions,
  ArticlesCreatorStore,
  ArticlesCreatorState,
  ArticlesCreatorStoreStateKey,
};
