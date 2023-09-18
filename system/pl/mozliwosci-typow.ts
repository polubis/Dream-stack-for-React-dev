// Z type to działa.
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

// Tablica to też obiekt!
type MyArr = {
  length: number;
  [index: number]: string;
};

// Tablica to też obiekt!
type MyFunction = {
  (x: number, y: number): number;
};

// Słowo kluczowe "type" może służyć do zadeklarowania
// czegokolwiek.
