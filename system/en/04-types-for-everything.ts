type Tuple = [number, string];
type Literal = 'Jarek' | 'Tomasz';
type Id = string | number;
type User = {
  id: string;
  posts: unknown[];
};
type UnknownArr = unknown[];
type Anything = any;
interface SomeObject {
  id: string;
}
type SomeObjectAlias = SomeObject;

type MyArr = {
  length: number;
  [index: number]: string;
};

type MyFunction = {
  (x: number, y: number): number;
};
