import type {
  Lang,
  ResponseError,
  Url,
  CreateArticlePayload,
} from '@system/blog-api-models';
import type { FormState } from '@system/utils';

interface ArticleMaintainFormData
  extends Omit<CreateArticlePayload, 'thumbnail'> {
  thumbnail: {
    file: CreateArticlePayload['thumbnail'] | null;
    preview: string[];
  };
}

interface ArticleMaintainActions {
  initialize: (lang: Lang, url?: Url) => Promise<void>;
  change: <
    K extends keyof ArticleMaintainFormData,
    V extends ArticleMaintainFormData[K]
  >(
    key: K,
    value: V
  ) => void;
  confirm: () => Promise<void>;
}

interface ArticleMaintainState {
  is:
    | 'idle'
    | 'loading'
    | 'error'
    | 'creation'
    | 'edition'
    | 'pending'
    | 'created'
    | 'edited';
  url?: Url;
  error?: ResponseError;
  form?: FormState<ArticleMaintainFormData>;
}
type ArticleMaintainStateKey = ArticleMaintainState['is'];
type ArticleMaintainStore = ArticleMaintainState;

export type {
  ArticleMaintainStore,
  ArticleMaintainState,
  ArticleMaintainStateKey,
  ArticleMaintainFormData,
  ArticleMaintainActions,
};
