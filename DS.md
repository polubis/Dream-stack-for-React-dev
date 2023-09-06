# Conventions in project

## State management

### Modeling

You need to create separate **interface** with **state** variants and 
single **interface** or **type**.

```ts
// defs.ts file
type Idle = { is: 'idle' };
type Busy = { is: 'busy' };
type Ok = { is: 'ok'; reviews: ArticleReviewDto[] };
type Fail = { is: 'fail'; error: ResponseError };

type State = Idle | Busy | Ok | Fail;
// store.ts file
import { create } from 'zustand';
import type * as NameOfFeature from './defs';

const useNameOfFeatureStore = create<NameOfFeature.State>(() => ({
  is: 'idle',
}));

export { useNameOfFeatureStore };
```

### Actions

You need to create separate **interface** with actions and define in one place the shape.

```ts
// defs.ts file
interface Actions {
  load(id: Id): Promise<void>;
}
// actions.ts file
import type * as NameOfFeature from "./defs";

const actions: NameOfFeature.Actions = {};
```
