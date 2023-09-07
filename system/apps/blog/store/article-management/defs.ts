import type { ArticleStatus, Id, Lang, Url } from '@system/blog-api-models';

interface Idle {
  is: 'idle';
}
interface Active {
  is: 'active';
  id: Id;
}

type State = Idle | Active;

interface Actions {
  start(id: Id, url: Url, lang: Lang): void;
  reset(): void;
  confirm(id: Id): Promise<void>;
  changeStatus(id: Id, status: ArticleStatus): Promise<void>;
}

interface Selectors {
  active: () => Active;
}

export type { Actions, State, Idle, Active, Selectors };
