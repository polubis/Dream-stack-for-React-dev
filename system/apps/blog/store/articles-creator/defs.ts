interface ArticlesCreatorActions {
  change: (code: string) => void;
  load: (code: string) => void;
}

interface ArticlesCreatorState extends ArticlesCreatorActions {
  key: 'idle' | 'loaded';
  code: string;
}

type ArticlesCreatorStore = ArticlesCreatorState & ArticlesCreatorActions;

type ArticlesCreatorStoreStateKey = ArticlesCreatorState['key'];

export type {
  ArticlesCreatorActions,
  ArticlesCreatorStore,
  ArticlesCreatorState,
  ArticlesCreatorStoreStateKey,
};
