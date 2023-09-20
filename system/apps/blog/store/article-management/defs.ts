import type { ArticleStatus, Id, Lang, Url } from '@system/blog-api-models';

type Idle = {
  is: 'idle';
};
type Active = {
  is: 'active';
  id: Id;
};

type State = Idle | Active;

type Actions = {
  start(id: Id, url: Url, lang: Lang): void;
  reset(): void;
  confirm(id: Id): Promise<void>;
  changeStatus(id: Id, status: ArticleStatus): Promise<void>;
};

type Selectors = {
  active: () => Active;
};

export type { Actions, State, Idle, Active, Selectors };
