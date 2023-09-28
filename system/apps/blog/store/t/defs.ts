// We've used namespace to easy group our definitions
// without names duplication.
/* eslint-disable @typescript-eslint/no-namespace */
export namespace ArticlesStore {
  // The UI view-model to work with.
  export interface Article {
    id: number;
    title: string;
    content: string;
  }
  // Helper type.
  export type ArticlesCollection = Article[];

  // Possible states.
  export type Idle = { is: 'idle' };
  export type Busy = { is: 'busy' };
  export type Ok = { is: 'ok'; articles: ArticlesCollection };
  export type Fail = { is: 'fail'; error: string };

  // Union for exhaustiveness checking technique implementation.
  export type State = Idle | Busy | Ok | Fail;

  export interface Selectors {
    // It will cause rerender - hook with selector.
    useArticles(): ArticlesCollection;
    // To read articles in layers not connected with "React"
    // and in event handlers to avoid rerenders!
    articles(): ArticlesCollection;
  }
  // This will be dispatched by components.
  export interface Actions {
    init(): Promise<void>;
    reset(): void;
  }
  // Definition of functions to change the state.
  export interface States {
    idle(): Idle;
    busy(): Busy;
    ok(articles: ArticlesCollection): Ok;
    fail(error: unknown): Fail;
  }
}
