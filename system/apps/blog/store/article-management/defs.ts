import type { ArticleStatus, Id, Lang, Url } from '@system/blog-api-models';

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace ArticleManagementStore {
  export interface Idle {
    is: 'idle';
  }
  export interface Active {
    is: 'active';
    id: Id;
  }

  export type State = Idle | Active;

  export interface Actions {
    start(id: Id, url: Url, lang: Lang): void;
    reset(): void;
    confirm(id: Id): Promise<void>;
    changeStatus(id: Id, status: ArticleStatus): Promise<void>;
    sendForApproval(id: Id): Promise<void>;
  }
}

export type { ArticleManagementStore };
